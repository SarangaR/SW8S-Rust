searchState.loadedDescShard("parking_lot_core", 0, "This library exposes a low-level API for creating your own …\nAbort the operation without doing anything.\nA default park token to use.\nA default unpark token to use.\nOperation that <code>unpark_filter</code> should perform for each …\nThe validation callback returned false.\nResult of a park operation.\nA value associated with a parked thread which can be used …\nRequeue all threads onto the target queue.\nRequeue one thread and leave the rest parked on the …\nOperation that <code>unpark_requeue</code> should perform.\nDon’t unpark the thread and continue scanning the list …\nA counter used to perform exponential backoff in spin …\nDon’t unpark the thread and stop scanning the list of …\nThe timeout expired.\nUnpark the thread and continue scanning the list of parked …\nUnpark one thread and leave the rest parked. No requeuing …\nUnpark one thread and requeue the rest onto the target …\nResult of an unpark operation.\nA value which is passed from an unparker to a parked …\nWe were unparked by another thread with the given token.\nPrivate field so new fields can be added without breakage.\nThis is set to true on average once every 0.5ms for any …\n[Experimental] Deadlock detection\nWhether there are any threads remaining in the queue. This …\nParks the current thread in the queue associated with the …\nThe number of threads that were requeued.\nUnparks all threads in the queue associated with the given …\nUnparks a number of threads from the front of the queue …\nUnparks one thread from the queue associated with the …\nRemoves all threads from the queue associated with <code>key_from</code>…\nThe number of threads that were unparked.\nAcquire a resource identified by key in the deadlock …\nRelease a resource identified by key in the deadlock …\nAbort the operation without doing anything.\nA default park token to use.\nA default unpark token to use.\nOperation that <code>unpark_filter</code> should perform for each …\nHolds the pointer to the currently active <code>HashTable</code>.\nThe validation callback returned false.\nResult of a park operation.\nA value associated with a parked thread which can be used …\nRequeue all threads onto the target queue.\nRequeue one thread and leave the rest parked on the …\nOperation that <code>unpark_requeue</code> should perform.\nDon’t unpark the thread and continue scanning the list …\nDon’t unpark the thread and stop scanning the list of …\nThe timeout expired.\nUnpark the thread and continue scanning the list of parked …\nUnpark one thread and leave the rest parked. No requeuing …\nUnpark one thread and requeue the rest onto the target …\nResult of an unpark operation.\nA value which is passed from an unparker to a parked …\nWe were unparked by another thread with the given token.\nPrivate field so new fields can be added without breakage.\nThis is set to true on average once every 0.5ms for any …\nReturns a reference to the latest hash table, creating one …\n[Experimental] Deadlock detection\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a reference to the latest hash table, creating one …\nWhether there are any threads remaining in the queue. This …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if we were unparked by another thread.\nLocks the bucket for the given key and returns a reference …\nLocks the bucket for the given key and returns a reference …\nLocks the two buckets for the given pair of keys and …\nParks the current thread in the queue associated with the …\nIterate through all <code>ThreadData</code> objects in the bucket and …\nThe number of threads that were requeued.\nUnlock a pair of buckets\nUnparks all threads in the queue associated with the given …\nUnparks a number of threads from the front of the queue …\nUnparks one thread from the queue associated with the …\nRemoves all threads from the queue associated with <code>key_from</code>…\nThe number of threads that were unparked.\nAcquire a resource identified by key in the deadlock …\nRelease a resource identified by key in the deadlock …\nA counter used to perform exponential backoff in spin …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new <code>SpinWait</code>.\nResets a <code>SpinWait</code> to its initial state.\nSpins until the sleep threshold has been reached.\nSpins without yielding the thread to the OS.\nTrait for the platform thread parker implementation.\nHandle for a thread that is about to be unparked. We need …\nParks the thread until it is unparked. This should be …\nParks the thread until it is unparked or the timeout is …\nPrepares the parker. This should be called before adding …\nChecks if the park timed out. This should be called while …\nWakes up the parked thread. This should be called after …\nLocks the parker to prevent the target thread from …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new, unlocked, WordLock.\nMust not be called on an already unlocked <code>WordLock</code>!")