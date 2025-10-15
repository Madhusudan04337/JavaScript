// Object properties have attributes like 'writable', 'configurable', and 'enumerable'.
// These define if a property can be changed, deleted, or listed.

let user = {
    name: 'Alex',
    age: 23
};

Object.defineProperty(user, 'status', {
    value: 'active',
    writable: false, // Prevents the property from being changed
    configurable: false,
    enumerable: true
});

// This attempt to change the status will fail silently in non-strict mode.
user.status = 'inactive';
console.log(user.status);