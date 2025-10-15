// A shallow copy creates a new object but does not create copies of nested objects.
// The nested objects are shared between the original and the copy.

let original = {
    name: "Jack",
    address: {
        city: "New York"
    }
};

// Creating a shallow copy using the spread syntax
let shallow = { ...original };

// Modifying a nested property in the copy
shallow.address.city = "London";

// The change is reflected in the original object because the nested 'address' object is shared.
console.log("Original city:", original.address.city);
console.log("Shallow copy's city:", shallow.address.city);