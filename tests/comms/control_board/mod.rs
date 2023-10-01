use anyhow::Result;
use std::str::from_utf8;
use std::time::Duration;
use std::{fs::create_dir_all, path::Path};
use sw8s_rust_lib::comms::control_board::response::ResponseMap;
use sw8s_rust_lib::comms::control_board::ControlBoard;
use tokio::fs::File;
use tokio::io::AsyncWriteExt;
use tokio::io::{sink, AsyncReadExt};
use tokio::process::Command;
use tokio::sync::{Mutex, RwLock};
use tokio::time::{sleep, timeout};

#[cfg(target_os = "linux")]
use {flate2::bufread::GzDecoder, tar::Archive};

#[cfg(target_os = "linux")]
static GODOT: Mutex<&str> = Mutex::const_new("tests/godot_sim/GodotAUVSim.x86_64");
#[cfg(target_os = "macos")]
const GODOT: &str = "tests/godot_sim/GodotAUVSim.app";
#[cfg(target_os = "windows")]
const GODOT: &str = "tests/godot_sim/GodotAUVSim.exe";

const GODOT_DIR: &str = "tests/godot_sim/";

async fn download_sim() -> Result<()> {
    const VERSION: &str = "v1.2.1";

    #[cfg(target_os = "linux")]
    const SUFFIX: &str = "Linux_amd64.tar.gz";
    #[cfg(target_os = "macos")]
    const SUFFIX: &str = "macOS_amd64.app.zip";
    #[cfg(target_os = "windows")]
    const SUFFIX: &str = "Windows_amd64.zip";

    create_dir_all(GODOT_DIR)?;
    let source = format!("https://github.com/MB3hel/GodotAUVSim/releases/download/{VERSION}/GodotAUVSim_{VERSION}_{SUFFIX}");
    let response: &[u8] = &reqwest::get(source).await?.bytes().await?;

    #[cfg(target_os = "linux")]
    Archive::new(GzDecoder::new(response)).unpack(GODOT_DIR)?;

    #[cfg(not(target_os = "linux"))]
    zip_extract::extract(response, GODOT_DIR, true)?;

    Ok(())
}

async fn open_sim(godot: String) -> Result<()> {
    if !Path::new(&godot).is_file() {
        download_sim().await?
    }

    tokio::spawn(async move {
        Command::new(godot)
            .arg("--simcb")
            .kill_on_drop(true)
            .spawn()
            .unwrap()
            .wait()
            .await
            .unwrap()
    });
    // Give simulator time to spawn, magic number
    sleep(Duration::from_secs(3)).await;
    Ok(())
}

#[tokio::test]
async fn real_comms_read_no_error() {
    let mut err_msgs = Vec::new();

    ResponseMap::update_maps(
        &mut Vec::with_capacity(512),
        &mut File::open("tests/comms/control_board/control_board_in.dat")
            .await
            .unwrap(),
        &Mutex::default(),
        &RwLock::<Option<bool>>::default(),
        &RwLock::default(),
        &RwLock::default(),
        &mut err_msgs,
    )
    .await;

    print!("{}", from_utf8(&err_msgs).unwrap());
    assert!(err_msgs.is_empty());
}

#[ignore = "requires a UI, is long"]
#[tokio::test]
pub async fn tcp_connect() {
    const LOCALHOST: &str = "127.0.0.1";
    const SIM_PORT: &str = "5012";
    const SIM_DUMMY_PORT: &str = "5011";

    let godot = GODOT.lock().await;
    open_sim(godot.to_string()).await.unwrap();
    let control_board = ControlBoard::tcp(LOCALHOST, SIM_PORT, SIM_DUMMY_PORT.to_string())
        .await
        .unwrap();

    // Spam claim read lock to prove Rwlock allows write under read pressure
    while control_board.watchdog_status().await.is_none() {}
    // Confirm watchdog keeps motors alive
    assert_eq!(control_board.watchdog_status().await, Some(true));
}

#[ignore = "requires a UI, is long"]
#[tokio::test]
pub async fn tcp_move_raw() {
    const LOCALHOST: &str = "127.0.0.1";
    const SIM_PORT: &str = "5012";
    const SIM_DUMMY_PORT: &str = "5011";

    let godot = GODOT.lock().await;
    open_sim(godot.to_string()).await.unwrap();
    let control_board = ControlBoard::tcp(LOCALHOST, SIM_PORT, SIM_DUMMY_PORT.to_string())
        .await
        .unwrap();

    while timeout(
        Duration::from_secs(1),
        control_board.raw_speed_set([0.2, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.1]),
    )
    .await
    .is_err()
    {
        println!("RAW timeout");
    }

    // Will be broken until get IMU data read
    sleep(Duration::from_secs(10)).await;
    todo!();
}

#[ignore = "requires a UI, is long"]
#[tokio::test]
pub async fn tcp_move_sassist_2() {
    const LOCALHOST: &str = "127.0.0.1";
    const SIM_PORT: &str = "5012";
    const SIM_DUMMY_PORT: &str = "5011";

    let godot = GODOT.lock().await;
    open_sim(godot.to_string()).await.unwrap();
    let control_board = ControlBoard::tcp(LOCALHOST, SIM_PORT, SIM_DUMMY_PORT.to_string())
        .await
        .unwrap();

    while timeout(
        Duration::from_secs(1),
        control_board.stability_2_speed_set(-0.5, 1.0, 0.0, 0.0, 90.0, -1.0),
    )
    .await
    .is_err()
    {
        println!("STAB2 timeout");
    }

    // Will be broken until get IMU data read
    sleep(Duration::from_secs(10)).await;
    todo!();
}
