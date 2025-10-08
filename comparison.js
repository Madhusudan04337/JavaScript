// You can compare strings using equality operators (==, ===) or the localeCompare() method.

let s1 = "Ajay";
let s2 = new String("Ajay"); // s2 is a String object

console.log(s1 == s2);  // true, because == performs type coercion and compares values.
console.log(s1 === s2); // false, because === checks for type and value; s1 is primitive, s2 is an object.
console.log(s1.localeCompare(s2)); // 0, which means they are equal lexicographically.

/*
Expected Output:
true
false
0
*/