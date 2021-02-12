# async_patterns_node_js

```js
const { Worker } = require('worker_threads');

// method 1
const firstWorker = new Worker('cpu_intensive.js');

// method 2
const secondWorker = new Worker(`
  console.log('Do cpu intensive stuff here...');
`, {eval: true});

// method 3

const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  const thirdworker = new Worker(__filename);
} else {
  // worker thread code goes here
}
```
