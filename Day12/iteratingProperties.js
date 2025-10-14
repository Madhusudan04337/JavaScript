// Use a for...in loop to iterate through the properties of an object.

let user = { name: "Alex", age: 23 };

for (let key in user) {
    // It's a good practice to check if the property belongs to the object itself
    if (user.hasOwnProperty(key)) {
        console.log(key + ": " + user[key]);
    }
}