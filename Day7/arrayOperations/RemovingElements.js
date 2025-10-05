// To remove the elements from an array we have different methods like pop(), shift(), or splice().

// 1. The pop() method removes an element from the last index of the array.
// 2. The shift() method removes the element from the first index of the array.
// 3. The splice() method removes or replaces the element from the array.

// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

// Removes and returns the last element
let lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);

// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);