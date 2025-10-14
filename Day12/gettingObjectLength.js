// You can find the number of properties in an object by getting an array
// of its keys with Object.keys() and checking the array's length.

let user = { name: "Alex", age: 23 };
let numberOfProperties = Object.keys(user).length;

console.log(numberOfProperties);