// The Strict Inequality Operator (!==) checks if two strings are not equal in value OR type.

let s1 = "dev"; // Primitive Type
let s2 = new String("dev"); // Object type

// This is true because even though their values are the same, their types are different.
console.log(s1 !== s2);