// The map() method creates a new array populated with the results of calling a
// provided function on every element in the calling array.

// Note: The original example was confusing. Here is a simplified, correct example.
let a = [4, 9, 16, 25];

// Create a new array by taking the square root of each element.
let roots = a.map(Math.sqrt);

console.log(roots);

/*
Expected Output:
[ 2, 3, 4, 5 ]
*/
