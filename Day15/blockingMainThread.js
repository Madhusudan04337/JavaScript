// A long-running synchronous task, like an infinite loop, will block the main thread.
// This prevents the event loop from processing any other tasks, making the application unresponsive.

// Warning: Running this code will freeze your browser or Node.js process.
while (true) {
    console.log('This will block the event loop...');
}

console.log("This line will never be reached.");