(function() {
    var implementors = Object.fromEntries([["bytes",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/bytes_mut/struct.BytesMut.html\" title=\"struct bytes::bytes_mut::BytesMut\">BytesMut</a>"]]],["crossbeam_epoch",[["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/atomic/trait.Pointable.html\" title=\"trait crossbeam_epoch::atomic::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/atomic/struct.Owned.html\" title=\"struct crossbeam_epoch::atomic::Owned\">Owned</a>&lt;T&gt;"]]],["opencv",[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"opencv/manual/core/vector/struct.Vector.html\" title=\"struct opencv::manual::core::vector::Vector\">Vector</a>&lt;T&gt;<div class=\"where\">where\n    Self: VectorExtern&lt;T&gt; + VectorExternCopyNonBool&lt;T&gt;,</div>"]]],["serde",[]],["serde_spanned",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"serde_spanned/spanned/struct.Spanned.html\" title=\"struct serde_spanned::spanned::Spanned\">Spanned</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;"]]],["smallvec",[["impl&lt;A: <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;"]]],["toml_edit",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"toml_edit/internal_string/struct.InternalString.html\" title=\"struct toml_edit::internal_string::InternalString\">InternalString</a>"]]],["uuid",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Braced.html\" title=\"struct uuid::fmt::Braced\">Braced</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Hyphenated.html\" title=\"struct uuid::fmt::Hyphenated\">Hyphenated</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Simple.html\" title=\"struct uuid::fmt::Simple\">Simple</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Urn.html\" title=\"struct uuid::fmt::Urn\">Urn</a>"]]],["winnow",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"winnow/stream/struct.BStr.html\" title=\"struct winnow::stream::BStr\">BStr</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"winnow/stream/struct.Bytes.html\" title=\"struct winnow::stream::Bytes\">Bytes</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[750,606,528,13,558,638,432,1414,1008]}