// Default parameters function
// Default parameters are used when no argument is provided during the function call.
// If no value is passed, the function automatically uses the default value.

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();        // Hello, Guest (default used)
greet("Aman");  // Hello, Aman


// Return Statement
// The return statement is used to send a result back from a function.
// When return executes, the function stops running at that point.
// The returned value can be stored in a variable or used directly.

function add(a, b) {
  return a + b; // returns the sum
}

let result = add(5, 10);
console.log(result); // 15