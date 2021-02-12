# async_patterns_node_js

Declare an event listener
```js
let myEventEmitter = new EventEmitteR();

myEventEmitter.on('wroteCode', () => {
  console.log('Somebody wrote some code!');
});

myEventEmitter.emit('wroteCode');
```

```js
let myEventEmitter = new EventEmitteR();

myEventEmitter.on('wroteCode', (language) => {
  console.log(`Somebody wrote some ${language} code!`);
});

myEventEmitter.emit('wroteCode', 'javascript');
```
If we want to execute asynchronously an event:
```js
myEventEmitter.on('wroteCode', (language) => {
  setImmediate(() => console.log(`Somebody wrote some ${language} code!`));
});
```
