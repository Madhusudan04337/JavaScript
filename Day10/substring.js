// The substring() method returns the part of a string between a start and end index.
// It's similar to slice(), but cannot accept negative indices.

let str = "Mind, Power, Soul";

// Extracts characters from index 6 up to (but not including) index 11
let part = str.substring(6, 11);

console.log(part);

/*
Expected Output:
Power
*/