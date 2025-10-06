// The slice() method returns a shallow copy of a portion of an array into a new array object.
// The original array will not be modified.
// Syntax: array.slice(start_index, end_index (exclusive))

const a = [1, 2, 3, 4, 5];
const res = a.slice(1, 4); // Extracts elements from index 1 up to (but not including) index 4.

console.log(res); // The new array
console.log(a);   // The original array remains unchanged

/*
Expected Output:
[ 2, 3, 4 ]
[ 1, 2, 3, 4, 5 ]
*/