// "Callback Hell" refers to deeply nested callbacks, which can make code difficult
// to read, debug, and maintain. This often occurs with sequential asynchronous operations.
// Modern JavaScript (Promises, async/await) helps avoid this pattern.

setTimeout(() => {
    console.log("Step 1 Complete");
    setTimeout(() => {
        console.log("Step 2 Complete");
        setTimeout(() => {
            console.log("Step 3 Complete");
            // And so on...
        }, 1000);
    }, 1000);
}, 1000);