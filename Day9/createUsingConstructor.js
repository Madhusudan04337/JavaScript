// The new String() constructor creates a string object instead of a primitive string.
// This is generally not recommended as it can cause unexpected behavior.

let s = new String('abcd');
console.log(s);

/*
Expected Output:
[String: 'abcd']
*/