// The Strict Equality Operator (===) checks if two strings are equal in both value AND type.

let s1 = "dev"; // Primitive Type
let s2 = new String("dev"); // Object type

// This is false because s1 is a primitive 'string' and s2 is an 'object'.
console.log(s1 === s2);