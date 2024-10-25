searchState.loadedDescShard("crossbeam_epoch", 0, "Epoch-based memory reclamation.\nThe alignment of pointer.\nAn atomic pointer that can be safely shared between …\nAn epoch-based garbage collector.\nThe error returned on failed compare-and-set operation.\nMemory orderings for compare-and-set operations.\nThe error returned on failed compare-and-swap operation.\nA guard that keeps the current thread pinned.\nThe type for initializers.\nA handle to a garbage collector.\nAn owned heap-allocated object.\nTypes that are pointed to by a single word.\nA trait for either <code>Owned</code> or <code>Shared</code> pointers.\nA pointer to an object protected by the epoch GC.\nThe value in the atomic pointer at the time of the failed …\nThe value in the atomic pointer at the time of the failed …\nThe default garbage collector.\nReturns the default global collector.\nDereferences the given pointer.\nMutably dereferences the given pointer.\nDrops the object pointed to by the given pointer.\nThe global epoch\nThe ordering of the operation when it fails.\nReturns a new pointer pointing to the tagged pointer <code>data</code>.\nInitializes a with the given initializer.\nThe global data and participant for garbage collection.\nReturns the machine representation of the pointer.\nReturns <code>true</code> if the current thread is pinned.\nThe new value, which the operation failed to store.\nThe new value, which the operation failed to store.\nPins the current thread.\nThe ordering of the operation when it succeeds.\nSynchronization primitives.\nReturns a reference to a dummy guard that allows …\nThe alignment of pointer.\nArray with size.\nAn atomic pointer that can be safely shared between …\nThe error returned on failed compare-and-set operation.\nMemory orderings for compare-and-set operations.\nThe error returned on failed compare-and-swap operation.\nThe type for initializers.\nAn owned heap-allocated object.\nTypes that are pointed to by a single word.\nA trait for either <code>Owned</code> or <code>Shared</code> pointers.\nA pointer to an object protected by the epoch GC.\nConverts the pointer to a raw pointer (without the tag).\nConverts the pointer to a reference.\nReturns a copy of the atomic value.\nStores the pointer <code>new</code> (either <code>Shared</code> or <code>Owned</code>) into the …\nStores the pointer <code>new</code> (either <code>Shared</code> or <code>Owned</code>) into the …\nStores the pointer <code>new</code> (either <code>Shared</code> or <code>Owned</code>) into the …\nStores the pointer <code>new</code> (either <code>Shared</code> or <code>Owned</code>) into the …\nGiven a tagged pointer <code>data</code>, returns the same pointer, but …\nThe value in the atomic pointer at the time of the failed …\nThe value in the atomic pointer at the time of the failed …\nDecomposes a tagged pointer <code>data</code> into the pointer and the …\nDereferences the given pointer.\nDereferences the pointer.\nMutably dereferences the given pointer.\nDereferences the pointer.\nDrops the object pointed to by the given pointer.\nPanics if the pointer is not properly unaligned.\nThe ordering of the operation when it fails.\nBitwise “and” with the current tag.\nBitwise “or” with the current tag.\nFetches the pointer, and then applies a function to it …\nBitwise “xor” with the current tag.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a new atomic pointer pointing to <code>raw</code>.\nReturns a new atomic pointer pointing to <code>ptr</code>.\nReturns a new atomic pointer pointing to <code>owned</code>.\nReturns a new owned pointer pointing to <code>b</code>.\nReturns the argument unchanged.\nReturns a new pointer pointing to <code>raw</code>.\nReturns the argument unchanged.\nReturns a new owned pointer pointing to <code>raw</code>.\nReturns a new pointer pointing to the tagged pointer <code>data</code>.\nReturns a new atomic pointer pointing to the tagged …\nReturns a new pointer pointing to the tagged pointer <code>data</code>.\nInitializes a with the given initializer.\nAllocates <code>value</code> on the heap and returns a new atomic …\nAllocates <code>value</code> on the heap and returns a new owned …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the owned pointer into a <code>Box</code>.\nTakes ownership of the pointee.\nTakes ownership of the pointee.\nConverts the owned pointer into a <code>Shared</code>.\nReturns the machine representation of the pointer.\nReturns <code>true</code> if the pointer is null.\nThe number of elements (not the number of bytes).\nLoads a <code>Shared</code> from the atomic pointer.\nLoads a <code>Shared</code> from the atomic pointer using a “consume…\nReturns a bitmask containing the unused least significant …\nAllocates <code>value</code> on the heap and returns a new atomic …\nAllocates <code>value</code> on the heap and returns a new owned …\nThe new value, which the operation failed to store.\nThe new value, which the operation failed to store.\nReturns a new null atomic pointer.\nReturns a new null pointer.\nStores a <code>Shared</code> or <code>Owned</code> pointer into the atomic pointer.\nGiven ordering for the success case in a compare-exchange …\nThe ordering of the operation when it succeeds.\nStores a <code>Shared</code> or <code>Owned</code> pointer into the atomic pointer, …\nReturns the tag stored within the pointer.\nReturns the tag stored within the pointer.\nTakes ownership of the pointee if it is non-null.\nTakes ownership of the pointee if it is not null.\nReturns the same pointer, but tagged with <code>tag</code>. <code>tag</code> is …\nReturns the same pointer, but tagged with <code>tag</code>. <code>tag</code> is …\nAn epoch-based garbage collector.\nA handle to a garbage collector.\nCreates another reference to the same garbage collector.\nReturns the <code>Collector</code> associated with this handle.\nChecks if both handles point to the same collector.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the handle is pinned.\nCreates a new collector.\nPins the handle.\nRegisters a new handle for the collector.\nThe per-thread participant for the default garbage …\nReturns the default global collector.\nReturns <code>true</code> if the current thread is pinned.\nPins the current thread.\nNumber of words a piece of <code>Data</code> can hold.\nSome space to keep a <code>FnOnce()</code> object on the stack.\nA <code>FnOnce()</code> that is stored inline if small, or otherwise …\nCalls the function.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConstructs a new <code>Deferred</code> from a <code>FnOnce()</code>.\nAn atomic value that holds an <code>Epoch</code>.\nAn epoch that can be marked as pinned or unpinned.\nStores a value into the atomic epoch if the current value …\nThe least significant bit is set if pinned. The rest of …\nSince <code>Epoch</code> is just a wrapper around <code>usize</code>, an <code>AtomicEpoch</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the epoch is marked as pinned.\nLoads a value from the atomic epoch.\nCreates a new atomic epoch.\nReturns the same epoch, but marked as pinned.\nReturns the starting epoch in unpinned state.\nStores a value into the atomic epoch.\nReturns the successor epoch.\nReturns the same epoch, but marked as unpinned.\nReturns the number of epochs <code>self</code> is ahead of <code>rhs</code>.\nA guard that keeps the current thread pinned.\nReturns the <code>Collector</code> associated with this guard.\nStores a function so that it can be executed at some point …\nStores a destructor for an object so that it can be …\nStores a function so that it can be executed at some point …\nClears up the thread-local cache of deferred functions by …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nUnpins and then immediately re-pins the thread.\nTemporarily unpins the thread, executes the given function …\nReturns a reference to a dummy guard that allows …\nA bag of deferred functions.\nNumber of bags to destroy.\nThe global data for a garbage collector.\nParticipant for garbage collection.\nMaximum number of objects a bag can contain.\nNumber of pinnings after which a participant will execute …\nA pair of an epoch and a bag.\nIncrements the handle count.\nThe local bag of deferred functions.\nCollects several bags from the global queue and executes …\nReturns a reference to the <code>Collector</code> in which this <code>Local</code> …\nA reference to the global data.\nAdds <code>deferred</code> to the thread-local bag.\nStashed objects.\nA node in the intrusive linked list of <code>Local</code>s.\nThe global epoch.\nThe local epoch.\nRemoves the <code>Local</code> from the global linked list.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a reference to the <code>Global</code> in which this <code>Local</code> …\nThe number of guards keeping this participant pinned.\nThe number of active handles.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the bag is empty.\nChecks if it is safe to drop the bag w.r.t. the given …\nReturns <code>true</code> if the current participant is pinned.\nThe intrusive linked list of <code>Local</code>s.\nReturns a new, empty bag.\nCreates a new global data for garbage collection.\nPins the <code>Local</code>.\nTotal number of pinnings performed.\nPushes the bag into the global queue and replaces the bag …\nThe global queue of bags of deferred functions.\nRegisters a new <code>Local</code> in the provided <code>Global</code>.\nDecrements the handle count.\nUnpins and then pins the <code>Local</code>.\nSeals the bag with the given epoch.\nAttempts to advance the global epoch.\nAttempts to insert a deferred function into the bag.\nUnpins the <code>Local</code>.\nDeclare a new thread local storage key of type …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA thread-safe reference-counting pointer. ‘Arc’ stands …\nReturns a reference to the underlying allocator.\nProvides a raw pointer to the data.\nConverts to <code>Arc&lt;[T]&gt;</code>.\nConverts to <code>Arc&lt;T&gt;</code>.\nMakes a clone of the <code>Arc</code> pointer.\nComparison for two <code>Arc</code>s.\nDecrements the strong reference count on the <code>Arc&lt;T&gt;</code> …\nDecrements the strong reference count on the <code>Arc&lt;T&gt;</code> …\nCreates an empty CStr inside an Arc\nCreates an empty <code>[T]</code> inside an Arc\nCreates an empty str inside an Arc\nCreates a new <code>Arc&lt;T&gt;</code>, with the <code>Default</code> value for <code>T</code>.\nAttempts to downcast the <code>Arc&lt;dyn Any + Send + Sync&gt;</code> to a …\nDowncasts the <code>Arc&lt;dyn Any + Send + Sync&gt;</code> to a concrete …\nCreates a new <code>Weak</code> pointer to this allocation.\nDrops the <code>Arc</code>.\nEquality for two <code>Arc</code>s.\nConverts a <code>PathBuf</code> into an Arc&lt;Path&gt; by moving the <code>PathBuf</code> …\nCopies the string into a newly allocated Arc&lt;OsStr&gt;.\nAllocates a reference-counted <code>str</code> and copies <code>v</code> into it.\nConverts a <code>CString</code> into an Arc&lt;CStr&gt; by moving the <code>CString</code> …\nAllocates a reference-counted <code>str</code> and copies <code>v</code> into it.\nAllocates a reference-counted slice and fills it by …\nConverts a <code>[T; N]</code> into an <code>Arc&lt;[T]&gt;</code>.\nConverts a <code>T</code> into an <code>Arc&lt;T&gt;</code>\nAllocates a reference-counted slice and moves <code>v</code>’s items …\nConverts a <code>Path</code> into an <code>Arc</code> by copying the <code>Path</code> data into …\nCreates an atomically reference-counted pointer from a …\nMove a boxed object to a new, reference-counted allocation.\nConverts an atomically reference-counted string slice into …\nConverts a <code>&amp;CStr</code> into a <code>Arc&lt;CStr&gt;</code>, by copying the contents …\nConverts an <code>OsString</code> into an Arc&lt;OsStr&gt; by moving the …\nReturns the argument unchanged.\nTakes each element in the <code>Iterator</code> and collects it into an …\nConstructs an <code>Arc&lt;T&gt;</code> from a raw pointer.\nConstructs an <code>Arc&lt;T, A&gt;</code> from a raw pointer.\n‘Greater than or equal to’ comparison for two <code>Arc</code>s.\nReturns a mutable reference into the given <code>Arc</code>, if there …\nReturns a mutable reference into the given <code>Arc</code>, without …\nGreater-than comparison for two <code>Arc</code>s.\nIncrements the strong reference count on the <code>Arc&lt;T&gt;</code> …\nIncrements the strong reference count on the <code>Arc&lt;T&gt;</code> …\nCalls <code>U::from(self)</code>.\nReturns the inner value, if the <code>Arc</code> has exactly one strong …\nConsumes the <code>Arc</code>, returning the wrapped pointer.\nConsumes the <code>Arc</code>, returning the wrapped pointer and …\n‘Less than or equal to’ comparison for two <code>Arc</code>s.\nLess-than comparison for two <code>Arc</code>s.\nMakes a mutable reference into the given <code>Arc</code>.\nInequality for two <code>Arc</code>s.\nConstructs a new <code>Arc&lt;T&gt;</code>.\nConstructs a new <code>Arc&lt;T&gt;</code> while giving you a <code>Weak&lt;T&gt;</code> to the …\nConstructs a new <code>Arc&lt;T&gt;</code> in the provided allocator.\nConstructs a new <code>Arc</code> with uninitialized contents.\nConstructs a new <code>Arc</code> with uninitialized contents in the …\nConstructs a new atomically reference-counted slice with …\nConstructs a new atomically reference-counted slice with …\nConstructs a new <code>Arc</code> with uninitialized contents, with the …\nConstructs a new <code>Arc</code> with uninitialized contents, with the …\nConstructs a new atomically reference-counted slice with …\nConstructs a new atomically reference-counted slice with …\nPartial comparison for two <code>Arc</code>s.\nConstructs a new <code>Pin&lt;Arc&lt;T&gt;&gt;</code>. If <code>T</code> does not implement <code>Unpin</code>…\nConstructs a new <code>Pin&lt;Arc&lt;T, A&gt;&gt;</code> in the provided allocator. …\nReturns <code>true</code> if the two <code>Arc</code>s point to the same allocation …\nGets the number of strong (<code>Arc</code>) pointers to this …\nConstructs a new <code>Arc&lt;T&gt;</code>, returning an error if allocation …\nConstructs a new <code>Arc&lt;T, A&gt;</code> in the provided allocator, …\nConstructs a new <code>Arc</code> with uninitialized contents, …\nConstructs a new <code>Arc</code> with uninitialized contents, in the …\nConstructs a new <code>Arc</code> with uninitialized contents, with the …\nConstructs a new <code>Arc</code> with uninitialized contents, with the …\nConstructs a new <code>Pin&lt;Arc&lt;T&gt;&gt;</code>, return an error if …\nConstructs a new <code>Pin&lt;Arc&lt;T, A&gt;&gt;</code> in the provided allocator, …\nReturns the inner value, if the <code>Arc</code> has exactly one strong …\nIf we have the only reference to <code>T</code> then unwrap it. …\nGets the number of <code>Weak</code> pointers to this allocation.\nHas the effects of both <code>Acquire</code> and <code>Release</code> together: For …\nWhen coupled with a load, if the loaded value was written …\nA raw pointer type which can be safely shared between …\nAn integer type which can be safely shared between threads.\nAtomic memory orderings\nNo ordering constraints, only atomic operations.\nWhen coupled with a store, all previous operations become …\nLike <code>Acquire</code>/<code>Release</code>/<code>AcqRel</code> (for load, store, and …\nReturns a mutable pointer to the underlying pointer.\nReturns a mutable pointer to the underlying integer.\nStores a value into the pointer if the current value is …\nStores a value into the atomic integer if the current …\nStores a value into the pointer if the current value is …\nStores a value into the atomic integer if the current …\nStores a value into the pointer if the current value is …\nStores a value into the atomic integer if the current …\nA compiler memory fence.\nCreates a null <code>AtomicPtr&lt;T&gt;</code>.\nAn atomic fence.\nAdds to the current value, returning the previous value.\nPerforms a bitwise “and” operation on the address of …\nBitwise “and” with the current value.\nOffsets the pointer’s address by adding <code>val</code> <em>bytes</em>, …\nOffsets the pointer’s address by subtracting <code>val</code> <em>bytes</em>, …\nMaximum with the current value.\nMinimum with the current value.\nBitwise “nand” with the current value.\nPerforms a bitwise “or” operation on the address of …\nBitwise “or” with the current value.\nOffsets the pointer’s address by adding <code>val</code> (in units of …\nOffsets the pointer’s address by subtracting <code>val</code> (in …\nSubtracts from the current value, returning the previous …\nFetches the value, and applies a function to it that …\nFetches the value, and applies a function to it that …\nPerforms a bitwise “xor” operation on the address of …\nBitwise “xor” with the current value.\nReturns the argument unchanged.\nConverts a <code>*mut T</code> into an <code>AtomicPtr&lt;T&gt;</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts an <code>usize</code> into an <code>AtomicUsize</code>.\nGets atomic access to a pointer.\nGet atomic access to a <code>&amp;mut usize</code>.\nGets atomic access to a slice of pointers.\nGet atomic access to a <code>&amp;mut [usize]</code> slice.\nCreates a new <code>AtomicPtr</code> from a pointer.\nCreates a new reference to an atomic integer from a …\nReturns a mutable reference to the underlying pointer.\nReturns a mutable reference to the underlying integer.\nGets non-atomic access to a <code>&amp;mut [AtomicPtr]</code> slice.\nGet non-atomic access to a <code>&amp;mut [AtomicUsize]</code> slice\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes the atomic and returns the contained value.\nConsumes the atomic and returns the contained value.\nLoads a value from the pointer.\nLoads a value from the atomic integer.\nCreates a new <code>AtomicPtr</code>.\nCreates a new atomic integer.\nStores a value into the pointer.\nStores a value into the atomic integer.\nStores a value into the pointer, returning the previous …\nStores a value into the atomic integer, returning the …\nLock-free intrusive linked list.\nMichael-Scott lock-free queue.\nAn entry in a linked list.\nImplementing this trait asserts that the type <code>T</code> can be …\nAn iterator used for retrieving values from the list.\nAn error that occurs during iteration over the list.\nA lock-free, intrusive linked list of type <code>T</code>.\nA concurrent thread modified the state of the list at the …\nLogically, we store a borrow of an instance of <code>T</code> and use …\nThe phantom data for using <code>T</code> and <code>C</code>.\nThe current entry.\nReturns the empty entry.\nMarks this entry as deleted, deferring the actual …\nGiven a reference to an element’s entry, returns that …\nReturns a reference to this element’s <code>Entry</code>.\nThe function that is called when an entry is unlinked from …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe guard that protects the iteration.\nThe list head, needed for restarting iteration.\nThe head of the linked list.\nInserts <code>entry</code> into the head of the list.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an iterator over all objects.\nReturns a new, empty linked list.\nThe next entry in the linked list. If the tag is 1, this …\nPointer from the predecessor to the current entry.\nReturns the argument unchanged.\nGets the contents of the cell, initializing it with <code>f</code> if …\nSafety\nCalls <code>U::from(self)</code>.\nCreates a new empty cell.\nThe slot in which a value of type <code>T</code> can be stored.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new, empty queue.\nAttempts to pop a data node, if the data satisfies the …\nAttempts to pop a data node. <code>Ok(None)</code> if queue is empty; …\nAdds <code>t</code> to the back of the queue, possibly waking up …\nAttempts to atomically place <code>n</code> into the <code>next</code> pointer of …\nAttempts to dequeue from the front.\nAttempts to dequeue from the front, if the item satisfies …")