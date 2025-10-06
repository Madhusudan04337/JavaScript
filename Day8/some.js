// The some() method tests whether at least one element in the array
// passes the test implemented by the provided function. It returns a boolean value.

const a = [1, 2, 3, 4, 5];
let res = a.some((val) => val > 4); // Checks if any value is greater than 4.

console.log(res);

/*
Expected Output:
true
*/