//The optional chaining operator allows safe access to deeply nested properties without throwing errors if the property doesn’t exist.
const obj = { name: "Aman", address: { city: "Delhi" } };
console.log(obj.address?.city);
console.log(obj.contact?.phone);

// ?. safely accesses a property or method.
// Returns undefined if the property doesn’t exist.