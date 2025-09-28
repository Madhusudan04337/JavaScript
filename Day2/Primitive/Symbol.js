// Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. 
// They help create unique keys in objects, preventing conflicts with other properties.

let s1 = Symbol("Geeks");
let s2 = Symbol("Geeks");
console.log(s1 == s2);