// A new way to write functions using the => syntax. They are shorter and do not have their own this binding, which makes them useful in some cases.
const square = n => n * n;
console.log(square(4)); // 16