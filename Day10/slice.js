// The slice() method extracts a part of a string and returns it as a new string,
// without modifying the original string.
// Syntax: string.slice(startIndex, endIndex (exclusive))

let A = 'Learn with CodeHub';

let b = A.slice(0, 5);  // Extracts from index 0 to 4
let c = A.slice(6, 10); // Extracts from index 6 to 9
let d = A.slice(11);   // Extracts from index 11 to the end

console.log(b);
console.log(c);
console.log(d);

/*
Expected Output:
Learn
with
CodeHub
*/