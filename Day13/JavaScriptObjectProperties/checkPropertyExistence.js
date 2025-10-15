// You can check if a property exists using the 'in' operator or the .hasOwnProperty() method.
// 'in' checks the object and its prototype chain.
// .hasOwnProperty() only checks for properties owned directly by the object.

let user = {
    name: 'Alex',
    age: 23,
    gender: 'female'
};

console.log('age' in user);
console.log(user.hasOwnProperty('gender'));