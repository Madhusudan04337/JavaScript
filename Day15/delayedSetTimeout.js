// A setTimeout callback is not guaranteed to execute exactly after its specified delay.
// If the call stack is busy with a long synchronous task, the callback must wait until the stack is empty.

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout after 1 second");
}, 1000);

// This long loop blocks the main thread for several seconds.
for (let i = 0; i < 2e9; i++) {
    // This is a blocking operation
}

// This log appears after the loop finishes, and only then can the setTimeout callback execute.
console.log("End");