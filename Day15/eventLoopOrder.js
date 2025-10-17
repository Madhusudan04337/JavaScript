// This example demonstrates the execution order in the event loop.
// Synchronous code runs first, then microtasks (Promises), and finally macrotasks (setTimeout).

console.log("Start");

// This is a macrotask and its callback is placed in the Callback Queue.
setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);

// This is a microtask and is placed in the Microtask Queue, which has higher priority.
Promise.resolve().then(() => {
    console.log("Promise Resolved");
});

console.log("End");