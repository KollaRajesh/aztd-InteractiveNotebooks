> ### Asynchronous Code in Type script 
 - Asynchronous way of code can be implemented using promise , async-await in Typescript.

1. **Promise**
   - In TypeScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    
   -  It allows you to associate handlers with an asynchronous action’s eventual success value by resolve function (or) failure reason by reject function.
    
   - This lets asynchronous methods return values like synchronous methods: 
         instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

    *pending*: initial state, neither fulfilled nor rejected.
    *fulfilled*: meaning that the operation was completed successfully.
    *rejected*: meaning that the operation failed.
    When either of these options occur, the associated handlers queued up by a promise’s then method are called .

 If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.
 

```ts
 //Creating a Promise

    function doAsyncWork(resolve, reject) {
        // perform async calls
        if (success) resolve(data);
        else reject(reason);
    }

    let p: Promise<string> = new Promise(doAsyncWork);
    let p: Promise<string> = new Promise((resolve, reject) => {
                // perform async calls
        if (success) resolve(data);
        else reject(reason);
        });
```
```ts
//Handling Promise Results
    let p: Promise<string> = MethodThatReturnsPromise();
                p.then(stringData => console.log(stringData))
                 .catch(reason => console.log(reason));
```

2. **async/await**
   - In TypeScript, async/await is a syntactic sugar for promises.
   - It allows you to write asynchronous code in a more synchronous manner and unwraps the promise in-line for you.

```ts
//async/await Syntax
async function doAsyncWork() {
    let results = await GetDataFromServer();
    console.log(results);
}
    console.log('Calling server to retrieve data...');
    doAsyncWork();
    console.log('Results will be displayed when ready...');
```

Note: Asynchronous code keeps  application responsive  by using Promises and async/await.