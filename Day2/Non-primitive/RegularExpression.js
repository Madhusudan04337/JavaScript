//A RegExp (Regular Expression) in JavaScript is an object used to define search patterns for matching text in strings.

// Creating a regular expression to match the word "hello"
let pattern = /hello/;
// Testing the pattern against a string
let result = pattern.test("Hello, world!"); // Returns true because "Hello" matches the pattern
console.log(result);