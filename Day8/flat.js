// The flat() method creates a new array with all sub-array elements
// concatenated into it recursively up to the specified depth.

const a1 = [['1', '2'], ['3', '4', '5', ['6'], '7']];
const a2 = a1.flat(Infinity); // Using Infinity flattens all levels of nesting.
console.log(a2);

/*
Expected Output:
[ '1', '2', '3', '4', '5', '6', '7' ]
*/