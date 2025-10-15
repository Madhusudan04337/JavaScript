// A deep copy creates a completely independent copy of an object, including all nested objects.
// A common method is to use JSON.stringify() followed by JSON.parse().
// This method does not work for functions, undefined, or circular references.

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
};

// Creating a deep copy
let newEmployee = JSON.parse(JSON.stringify(employee));

// Modifying the copy
newEmployee.ename = "Beck";
newEmployee.salary = 70000;

// The original object remains unchanged.
console.log("Original Employee=> ", employee);
console.log("New Employee=> ", newEmployee);