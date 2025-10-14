// To reliably check if a value is an object (and not null, which also has a 'typeof' object),
// use both 'typeof' and a null check.

let user = { name: "Alex" };
let isObject = typeof user === "object" && user !== null;

console.log(isObject);