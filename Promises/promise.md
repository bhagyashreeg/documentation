**Promises**

* A Promise is an object representing the eventual completion or failure of an asynchronous operation.
* It is also a returned object to which callbacks can be attached.

**Promises working**

* It is used to handle asynchronous operations in javascript.
* Multiple callback functions would create callback hell that leads to unmanageable code.
* They also can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

**States of promises**

* 1. Fulfilled : Action related to the promise succeeded
  2. Rejected : Action related to the promise failed
  3. Pending : Promise is still pending i.e not fulfilled or rejected yet
  4. Settled : Promise has fulfilled or rejected