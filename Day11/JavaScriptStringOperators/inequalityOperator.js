// The Inequality Operator (!=) checks if two strings are not equal in value, ignoring type.

// Example 1: Comparing two different primitive strings
let s1 = "dev";
let s2 = "app";
console.log(s1 != s2);

// Example 2: Comparing a primitive to a different String object
let s3 = "dev"; // Primitive Type
let s4 = new String("app"); // Object type
console.log(s3 != s4);