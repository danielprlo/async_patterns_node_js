## Basic structure of a promise

```js
let myPromise = new Promise((resolve, reject) => {
    //perform async calls
    if (success) {
        resolve(data);
    }
    else {
        reject(reason);
    }
});
```

Chaining
```js
MethodThatReturnsPromise()
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('All done!'));
```
## Generators
- Functions that can be paused and resumed
    - They mantaing the state when paused
- Return generators
    - Implemenent the iterator protocol (next())
- Lazy execution
    - Values computed on demand
    
```js
// * can be either at the beginning or end
function *generatorFunction() {
  console.log('Generator function is running');
  let x = 5;
  yield x; // This will return x and paused the execution until resumed

  let y = yield x; // y will get whatever is passed to the function
  x++;
  return x; // This will also notified that the function has finished
}

// This call will not do anything
let iterator = generatorFunction();

// This will execute it until the first yield
iterator.next();

// This will resume the execution until next yield
iterator.next();

//this will pass 4 as a result of yield
iterator.next(4);
```

## async/await
- Built on top of promises and generators
- Reads more like a synchronous code
- The data return is wrapped in a promise
- await will automatically extract the data from a promise
- await only returns the successfully responses, to get the errors we have to
wrap the call in a try/catch
  
```js
// async will wrap this into a promise
async function getData() {
  // the await keyboard will paused the function while waits the promise
  // to be resolved (yield)
  // rawData will get the resolve data
  let rawData = await MethodThatReturnsPromise();
  return JSON.parse(rawData);
}

getData()
  .then(data => console.log(data))
  .catch(error => console.log(error))
```
