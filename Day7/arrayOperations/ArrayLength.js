// We can get the length of the array using the array length property.
let a = ["HTML", "CSS", "JS"];
console.log("Array Length: " + a.length);

// Increase and Decrease the Array Length

a.length = 5; // Increase the length of array
console.log(a); // [ 'HTML', 'CSS', 'JS', <2 empty items> ]

a.length = 2; // Decrease the length of array
console.log(a); // [ 'HTML', 'CSS' ]