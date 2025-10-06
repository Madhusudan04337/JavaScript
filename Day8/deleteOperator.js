// The delete operator is used to remove a property from an object.
// When used on an array element, it removes the element but leaves an empty slot, not updating the length.

let emp = {
    firstName: "Riya",
    lastName: "Kaur",
    salary: 40000
};

console.log(delete emp.salary); // Returns true on successful deletion
console.log(emp);

/*
Expected Output:
true
{ firstName: 'Riya', lastName: 'Kaur' }
*/