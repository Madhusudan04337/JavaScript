// The filter() method creates a new array with all elements that pass the test
// implemented by the provided function. It does not modify the original array.

let a1 = [1, 2, 3, 4, 5];
let a2 = a1.filter((num) => num > 1); // Creates a new array with numbers greater than 1.

console.log(a2);

/*
Expected Output:
[ 2, 3, 4, 5 ]
*/