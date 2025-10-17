// The event loop always prioritizes tasks in the Microtask Queue (like Promises)
// over tasks in the Callback Queue (like setTimeout), even if both are ready to execute.

// setTimeout places its callback in the Callback (or macrotask) Queue.
setTimeout(() => {
    console.log("setTimeout callback executed");
}, 0);

// A resolved Promise places its callback in the Microtask Queue.
Promise.resolve().then(() => {
    console.log("Promise callback executed");
});

// This synchronous code runs first.
console.log("End of script");