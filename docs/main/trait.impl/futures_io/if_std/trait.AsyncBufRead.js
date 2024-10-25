(function() {
    var implementors = Object.fromEntries([["futures",[]],["futures_io",[]],["futures_util",[["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/empty/struct.Empty.html\" title=\"struct futures_util::io::empty::Empty\">Empty</a>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"enum\" href=\"futures_util/future/either/enum.Either.html\" title=\"enum futures_util::future::either::Either\">Either</a>&lt;A, B&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,\n    B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,</div>"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/take/struct.Take.html\" title=\"struct futures_util::io::take::Take\">Take</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/buf_reader/struct.BufReader.html\" title=\"struct futures_util::io::buf_reader::BufReader\">BufReader</a>&lt;R&gt;"],["impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/stream/try_stream/into_async_read/struct.IntoAsyncRead.html\" title=\"struct futures_util::stream::try_stream::into_async_read::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt;<div class=\"where\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>]&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/allow_std/struct.AllowStdIo.html\" title=\"struct futures_util::io::allow_std::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/cursor/struct.Cursor.html\" title=\"struct futures_util::io::cursor::Cursor\">Cursor</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>"],["impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/chain/struct.Chain.html\" title=\"struct futures_util::io::chain::Chain\">Chain</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,\n    U: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,</div>"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/buf_writer/struct.BufWriter.html\" title=\"struct futures_util::io::buf_writer::BufWriter\">BufWriter</a>&lt;W&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[14,18,5121]}