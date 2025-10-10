// The Equality Operator (==) checks if two strings are equal in value,
// ignoring their types (e.g., a primitive string vs. a String object).

// Example 1: Comparing two primitive strings
let s1 = "dev";
let s2 = "dev";
console.log(s1 == s2);

// Example 2: Comparing a primitive string to a String object
let s3 = "dev"; // Primitive Type
let s4 = new String("dev"); // Object type
console.log(s3 == s4);