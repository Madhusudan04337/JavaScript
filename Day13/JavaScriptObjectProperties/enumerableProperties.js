// Properties can be marked as non-enumerable. They won't appear in for...in loops or Object.keys().
// This can be set using Object.defineProperty().

let user = {
    name: 'Alex',
    age: 23,
    gender: 'male'
};

Object.defineProperty(user, 'country', {
    value: 'India',
    enumerable: false // This property will not be listed with Object.keys()
});

console.log("Country:", user.country);
console.log("Enumerable keys:", Object.keys(user));