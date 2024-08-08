use tokio::io::WriteHalf;
use tokio_serial::SerialStream;

use crate::{
    act_nest,
    missions::{
        action::{ActionConcurrentSplit, ActionConditional, ActionDataConditional, ActionUntil},
        basic::descend_depth_and_go_forward,
        extra::{AlwaysFalse, AlwaysTrue, Terminal},
        movement::{
            AdjustType, ClampX, ConstYaw, Descend, FlipX, InvertX, MultiplyX, ReplaceX,
            SetSideBlue, SetSideRed, SetX, SetY,
        },
        vision::{MidPoint, OffsetClass},
    },
    vision::{
        gate_poles::{GatePoles, Target},
        nn_cv2::{OnnxModel, YoloClass},
        Offset2D,
    },
};

use super::{
    action::{
        wrap_action, ActionChain, ActionConcurrent, ActionExec, ActionMod, ActionSequence,
        ActionWhile, FirstValid, TupleSecond,
    },
    action_context::{GetControlBoard, GetFrontCamMat, GetMainElectronicsBoard},
    basic::{descend_and_go_forward, DelayAction},
    comms::StartBno055,
    extra::{CountFalse, CountTrue, OutputType},
    movement::{
        AdjustMovementAngle, LinearYawFromX, OffsetToPose, Stability2Adjust, Stability2Movement,
        Stability2Pos, ZeroMovement,
    },
    vision::{DetectTarget, ExtractPosition, VisionNorm, VisionNormOffset},
};

pub fn coinflip<
    Con: Send
        + Sync
        + GetControlBoard<WriteHalf<SerialStream>>
        + GetMainElectronicsBoard
        + GetFrontCamMat,
>(
    context: &Con,
) -> impl ActionExec<()> + '_ {
    const TRUE_COUNT: u32 = 2;
    const DELAY_TIME: f32 = 3.0;

    const DEPTH: f32 = -1.25;
    const ALIGN_X_SPEED: f32 = 0.0;
    const ALIGN_Y_SPEED: f32 = 0.0;
    const ALIGN_YAW_SPEED: f32 = -6.0;

    act_nest!(
        ActionSequence::new,
        ActionConcurrent::new(Descend::new(context, DEPTH), StartBno055::new(context)),
        DelayAction::new(DELAY_TIME),
        ActionWhile::new(ActionSequence::new(
            act_nest!(
                ActionChain::new,
                ConstYaw::<Stability2Adjust>::new(AdjustType::Adjust(ALIGN_YAW_SPEED)),
                Stability2Movement::new(
                    context,
                    Stability2Pos::new(ALIGN_X_SPEED, ALIGN_Y_SPEED, 0.0, 0.0, None, DEPTH)
                ),
                OutputType::<()>::new(),
            ),
            act_nest!(
                ActionChain::new,
                VisionNorm::<Con, GatePoles<OnnxModel>, f64>::new(context, GatePoles::default(),),
                CountTrue::new(TRUE_COUNT),
            ),
        )),
    )
}