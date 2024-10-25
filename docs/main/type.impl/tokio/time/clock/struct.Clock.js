(function() {
    var type_impls = Object.fromEntries([["tokio",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clock\" class=\"impl\"><a class=\"src rightside\" href=\"src/tokio/time/clock.rs.html#19-27\">source</a><a href=\"#impl-Clock\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"tokio/time/clock/struct.Clock.html\" title=\"struct tokio::time::clock::Clock\">Clock</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/tokio/time/clock.rs.html#20-22\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"tokio/time/clock/struct.Clock.html#tymethod.new\" class=\"fn\">new</a>(_enable_pausing: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a>, _start_paused: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a>) -&gt; <a class=\"struct\" href=\"tokio/time/clock/struct.Clock.html\" title=\"struct tokio::time::clock::Clock\">Clock</a></h4></section><section id=\"method.now\" class=\"method\"><a class=\"src rightside\" href=\"src/tokio/time/clock.rs.html#24-26\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"tokio/time/clock/struct.Clock.html#tymethod.now\" class=\"fn\">now</a>(&amp;self) -&gt; <a class=\"struct\" href=\"tokio/time/instant/struct.Instant.html\" title=\"struct tokio::time::instant::Instant\">Instant</a></h4></section></div></details>",0,"tokio::runtime::driver::Clock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Clock\" class=\"impl\"><a class=\"src rightside\" href=\"src/tokio/time/clock.rs.html#12\">source</a><a href=\"#impl-Clone-for-Clock\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tokio/time/clock/struct.Clock.html\" title=\"struct tokio::time::clock::Clock\">Clock</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tokio/time/clock.rs.html#12\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"tokio/time/clock/struct.Clock.html\" title=\"struct tokio::time::clock::Clock\">Clock</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","tokio::runtime::driver::Clock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Clock\" class=\"impl\"><a class=\"src rightside\" href=\"src/tokio/time/clock.rs.html#12\">source</a><a href=\"#impl-Debug-for-Clock\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"tokio/time/clock/struct.Clock.html\" title=\"struct tokio::time::clock::Clock\">Clock</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tokio/time/clock.rs.html#12\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","tokio::runtime::driver::Clock"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[5164]}