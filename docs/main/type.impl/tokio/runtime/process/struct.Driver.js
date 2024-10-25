(function() {
    var type_impls = Object.fromEntries([["tokio",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Driver\" class=\"impl\"><a class=\"src rightside\" href=\"src/tokio/runtime/process.rs.html#12\">source</a><a href=\"#impl-Debug-for-Driver\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"tokio/runtime/process/struct.Driver.html\" title=\"struct tokio::runtime::process::Driver\">Driver</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tokio/runtime/process.rs.html#12\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","tokio::runtime::driver::ProcessDriver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Driver\" class=\"impl\"><a class=\"src rightside\" href=\"src/tokio/runtime/process.rs.html#20-44\">source</a><a href=\"#impl-Driver\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"tokio/runtime/process/struct.Driver.html\" title=\"struct tokio::runtime::process::Driver\">Driver</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/tokio/runtime/process.rs.html#22-29\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"tokio/runtime/process/struct.Driver.html#tymethod.new\" class=\"fn\">new</a>(park: <a class=\"struct\" href=\"tokio/runtime/signal/struct.Driver.html\" title=\"struct tokio::runtime::signal::Driver\">SignalDriver</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new signal <code>Driver</code> instance that delegates wakeups to <code>park</code>.</p>\n</div></details><section id=\"method.park\" class=\"method\"><a class=\"src rightside\" href=\"src/tokio/runtime/process.rs.html#31-34\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"tokio/runtime/process/struct.Driver.html#tymethod.park\" class=\"fn\">park</a>(&amp;mut self, handle: &amp;<a class=\"struct\" href=\"tokio/runtime/driver/struct.Handle.html\" title=\"struct tokio::runtime::driver::Handle\">Handle</a>)</h4></section><section id=\"method.park_timeout\" class=\"method\"><a class=\"src rightside\" href=\"src/tokio/runtime/process.rs.html#36-39\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"tokio/runtime/process/struct.Driver.html#tymethod.park_timeout\" class=\"fn\">park_timeout</a>(&amp;mut self, handle: &amp;<a class=\"struct\" href=\"tokio/runtime/driver/struct.Handle.html\" title=\"struct tokio::runtime::driver::Handle\">Handle</a>, duration: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>)</h4></section><section id=\"method.shutdown\" class=\"method\"><a class=\"src rightside\" href=\"src/tokio/runtime/process.rs.html#41-43\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"tokio/runtime/process/struct.Driver.html#tymethod.shutdown\" class=\"fn\">shutdown</a>(&amp;mut self, handle: &amp;<a class=\"struct\" href=\"tokio/runtime/driver/struct.Handle.html\" title=\"struct tokio::runtime::driver::Handle\">Handle</a>)</h4></section></div></details>",0,"tokio::runtime::driver::ProcessDriver"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[4196]}