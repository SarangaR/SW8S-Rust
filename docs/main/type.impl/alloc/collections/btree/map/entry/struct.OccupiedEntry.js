(function() {
    var type_impls = Object.fromEntries([["toml",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-OccupiedEntry%3C'_,+K,+V,+A%3E\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.12.0\">1.12.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#92\">source</a></span><a href=\"#impl-Debug-for-OccupiedEntry%3C'_,+K,+V,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html\" title=\"struct alloc::collections::btree::map::entry::OccupiedEntry\">OccupiedEntry</a>&lt;'_, K, V, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/alloc/trait.Allocator.html\" title=\"trait core::alloc::Allocator\">Allocator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#93\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","toml::map::OccupiedEntryImpl"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OccupiedEntry%3C'a,+K,+V,+A%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#389\">source</a><a href=\"#impl-OccupiedEntry%3C'a,+K,+V,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, K, V, A&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html\" title=\"struct alloc::collections::btree::map::entry::OccupiedEntry\">OccupiedEntry</a>&lt;'a, K, V, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/alloc/trait.Allocator.html\" title=\"trait core::alloc::Allocator\">Allocator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.key\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.10.0\">1.10.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#403\">source</a></span><h4 class=\"code-header\">pub fn <a href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html#tymethod.key\" class=\"fn\">key</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;K</a></h4></section></summary><div class=\"docblock\"><p>Gets a reference to the key in the entry.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::collections::BTreeMap;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: BTreeMap&lt;<span class=\"kw-2\">&amp;</span>str, usize&gt; = BTreeMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n<span class=\"macro\">assert_eq!</span>(map.entry(<span class=\"string\">\"poneyland\"</span>).key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_entry\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.12.0\">1.12.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#427\">source</a></span><h4 class=\"code-header\">pub fn <a href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html#tymethod.remove_entry\" class=\"fn\">remove_entry</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.tuple.html\">(K, V)</a></h4></section></summary><div class=\"docblock\"><p>Take ownership of the key and value from the map.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::collections::BTreeMap;\n<span class=\"kw\">use </span>std::collections::btree_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: BTreeMap&lt;<span class=\"kw-2\">&amp;</span>str, usize&gt; = BTreeMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"kw\">if let </span>Entry::Occupied(o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"comment\">// We delete the entry from the map.\n    </span>o.remove_entry();\n}\n\n<span class=\"comment\">// If now try to get the value, it will panic:\n// println!(\"{}\", map[\"poneyland\"]);</span></code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#448\">source</a></span><h4 class=\"code-header\">pub fn <a href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html#tymethod.get\" class=\"fn\">get</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;V</a></h4></section></summary><div class=\"docblock\"><p>Gets a reference to the value in the entry.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::collections::BTreeMap;\n<span class=\"kw\">use </span>std::collections::btree_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: BTreeMap&lt;<span class=\"kw-2\">&amp;</span>str, usize&gt; = BTreeMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"kw\">if let </span>Entry::Occupied(o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"macro\">assert_eq!</span>(o.get(), <span class=\"kw-2\">&amp;</span><span class=\"number\">12</span>);\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#479\">source</a></span><h4 class=\"code-header\">pub fn <a href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html#tymethod.get_mut\" class=\"fn\">get_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;mut V</a></h4></section></summary><div class=\"docblock\"><p>Gets a mutable reference to the value in the entry.</p>\n<p>If you need a reference to the <code>OccupiedEntry</code> that may outlive the\ndestruction of the <code>Entry</code> value, see <a href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html#method.into_mut\" title=\"method alloc::collections::btree::map::entry::OccupiedEntry::into_mut\"><code>into_mut</code></a>.</p>\n<h5 id=\"examples-3\"><a class=\"doc-anchor\" href=\"#examples-3\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::collections::BTreeMap;\n<span class=\"kw\">use </span>std::collections::btree_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: BTreeMap&lt;<span class=\"kw-2\">&amp;</span>str, usize&gt; = BTreeMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">12</span>);\n<span class=\"kw\">if let </span>Entry::Occupied(<span class=\"kw-2\">mut </span>o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"kw-2\">*</span>o.get_mut() += <span class=\"number\">10</span>;\n    <span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>o.get(), <span class=\"number\">22</span>);\n\n    <span class=\"comment\">// We can use the same Entry multiple times.\n    </span><span class=\"kw-2\">*</span>o.get_mut() += <span class=\"number\">2</span>;\n}\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">24</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_mut\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#506\">source</a></span><h4 class=\"code-header\">pub fn <a href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html#tymethod.into_mut\" class=\"fn\">into_mut</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;'a mut V</a></h4></section></summary><div class=\"docblock\"><p>Converts the entry into a mutable reference to its value.</p>\n<p>If you need multiple references to the <code>OccupiedEntry</code>, see <a href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html#method.get_mut\" title=\"method alloc::collections::btree::map::entry::OccupiedEntry::get_mut\"><code>get_mut</code></a>.</p>\n<h5 id=\"examples-4\"><a class=\"doc-anchor\" href=\"#examples-4\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::collections::BTreeMap;\n<span class=\"kw\">use </span>std::collections::btree_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: BTreeMap&lt;<span class=\"kw-2\">&amp;</span>str, usize&gt; = BTreeMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">12</span>);\n<span class=\"kw\">if let </span>Entry::Occupied(o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"kw-2\">*</span>o.into_mut() += <span class=\"number\">10</span>;\n}\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">22</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#529\">source</a></span><h4 class=\"code-header\">pub fn <a href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html#tymethod.insert\" class=\"fn\">insert</a>(&amp;mut self, value: V) -&gt; V</h4></section></summary><div class=\"docblock\"><p>Sets the value of the entry with the <code>OccupiedEntry</code>’s key,\nand returns the entry’s old value.</p>\n<h5 id=\"examples-5\"><a class=\"doc-anchor\" href=\"#examples-5\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::collections::BTreeMap;\n<span class=\"kw\">use </span>std::collections::btree_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: BTreeMap&lt;<span class=\"kw-2\">&amp;</span>str, usize&gt; = BTreeMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"kw\">if let </span>Entry::Occupied(<span class=\"kw-2\">mut </span>o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"macro\">assert_eq!</span>(o.insert(<span class=\"number\">15</span>), <span class=\"number\">12</span>);\n}\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">15</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/alloc/collections/btree/map/entry.rs.html#552\">source</a></span><h4 class=\"code-header\">pub fn <a href=\"https://doc.rust-lang.org/1.82.0/alloc/collections/btree/map/entry/struct.OccupiedEntry.html#tymethod.remove\" class=\"fn\">remove</a>(self) -&gt; V</h4></section></summary><div class=\"docblock\"><p>Takes the value of the entry out of the map, and returns it.</p>\n<h5 id=\"examples-6\"><a class=\"doc-anchor\" href=\"#examples-6\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::collections::BTreeMap;\n<span class=\"kw\">use </span>std::collections::btree_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: BTreeMap&lt;<span class=\"kw-2\">&amp;</span>str, usize&gt; = BTreeMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"kw\">if let </span>Entry::Occupied(o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"macro\">assert_eq!</span>(o.remove(), <span class=\"number\">12</span>);\n}\n<span class=\"comment\">// If we try to get \"poneyland\"'s value, it'll panic:\n// println!(\"{}\", map[\"poneyland\"]);</span></code></pre></div>\n</div></details></div></details>",0,"toml::map::OccupiedEntryImpl"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[16451]}