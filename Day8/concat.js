// The concat() method is used to merge two or more arrays.
// It does not change the existing arrays but instead returns a new array.

let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [17, 18, 19];

let newArr = a1.concat(a2, a3);
console.log(newArr);

/*
Expected Output:
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19
]
*/