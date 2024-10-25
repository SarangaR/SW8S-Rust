(function() {
    var type_impls = Object.fromEntries([["futures_util",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Single%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#69\">source</a><a href=\"#impl-Clone-for-Single%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"futures_util/stream/try_stream/try_flatten_unordered/struct.Single.html\" title=\"struct futures_util::stream::try_stream::try_flatten_unordered::Single\">Single</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#69\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"futures_util/stream/try_stream/try_flatten_unordered/struct.Single.html\" title=\"struct futures_util::stream::try_stream::try_flatten_unordered::Single\">Single</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","futures_util::stream::try_stream::try_flatten_unordered::SingleStreamResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Single%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#69\">source</a><a href=\"#impl-Debug-for-Single%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"futures_util/stream/try_stream/try_flatten_unordered/struct.Single.html\" title=\"struct futures_util::stream::try_stream::try_flatten_unordered::Single\">Single</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#69\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","futures_util::stream::try_stream::try_flatten_unordered::SingleStreamResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Single%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#72-82\">source</a><a href=\"#impl-Single%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"futures_util/stream/try_stream/try_flatten_unordered/struct.Single.html\" title=\"struct futures_util::stream::try_stream::try_flatten_unordered::Single\">Single</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#74-76\">source</a><h4 class=\"code-header\">fn <a href=\"futures_util/stream/try_stream/try_flatten_unordered/struct.Single.html#tymethod.new\" class=\"fn\">new</a>(val: T) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Constructs new <code>Single</code> with the given value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.next_immediate\" class=\"method\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#79-81\">source</a><h4 class=\"code-header\">fn <a href=\"futures_util/stream/try_stream/try_flatten_unordered/struct.Single.html#tymethod.next_immediate\" class=\"fn\">next_immediate</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to take inner item immediately. Will always succeed if the stream isn’t terminated.</p>\n</div></details></div></details>",0,"futures_util::stream::try_stream::try_flatten_unordered::SingleStreamResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Stream-for-Single%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#86-96\">source</a><a href=\"#impl-Stream-for-Single%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_util/stream/try_stream/try_flatten_unordered/struct.Single.html\" title=\"struct futures_util::stream::try_stream::try_flatten_unordered::Single\">Single</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#87\">source</a><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" class=\"associatedtype\">Item</a> = T</h4></section></summary><div class='docblock'>Values yielded by the stream.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_next\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#89-91\">source</a><a href=\"#method.poll_next\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"futures_util/stream/trait.Stream.html#tymethod.poll_next\" class=\"fn\">poll_next</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut Self&gt;,\n    _: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>&gt;&gt;</h4></section></summary><div class='docblock'>Attempt to pull out the next value of this stream, registering the\ncurrent task for wakeup if the value is not yet available, and returning\n<code>None</code> if the stream is exhausted. <a href=\"futures_util/stream/trait.Stream.html#tymethod.poll_next\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#93-95\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"futures_util/stream/trait.Stream.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.usize.html\">usize</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.usize.html\">usize</a>&gt;)</h4></section></summary><div class='docblock'>Returns the bounds on the remaining length of the stream. <a href=\"futures_util/stream/trait.Stream.html#method.size_hint\">Read more</a></div></details></div></details>","Stream","futures_util::stream::try_stream::try_flatten_unordered::SingleStreamResult"],["<section id=\"impl-Unpin-for-Single%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_util/stream/try_stream/try_flatten_unordered.rs.html#84\">source</a><a href=\"#impl-Unpin-for-Single%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"futures_util/stream/try_stream/try_flatten_unordered/struct.Single.html\" title=\"struct futures_util::stream::try_stream::try_flatten_unordered::Single\">Single</a>&lt;T&gt;</h3></section>","Unpin","futures_util::stream::try_stream::try_flatten_unordered::SingleStreamResult"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10969]}