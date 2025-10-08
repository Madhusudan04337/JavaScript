// Strings created with the 'new' keyword are objects, not primitive strings.
// This affects how they behave in strict comparisons.

const str1 = new String("GeeksforGeeks"); // This is an object
const str2 = "GeeksforGeeks";             // This is a primitive string

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 == str2);  // true (values are the same after type coercion)
console.log(str1 === str2); // false (types are different)

/*
Expected Output:
object
string
true
false
*/