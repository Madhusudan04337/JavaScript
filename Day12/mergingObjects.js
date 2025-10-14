// Objects can be merged using the spread syntax { ...obj1, ...obj2 }
// or Object.assign().

let userDetails = { name: "Alex" };
let userJob = { age: 23 };

// Using spread syntax to merge
let user = { ...userDetails, ...userJob };
console.log(user);