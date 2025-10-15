// For a reliable deep copy that handles complex objects (with functions, etc.),
// a library like Lodash is often used.
// Note: This requires the 'lodash' library to be installed (`npm install lodash`).

const lodash = require('lodash');

let employee = {
    eid: "E102",
    ename: "Jack",
    details: function() {
        return "Employee Name: " + this.ename;
    }
};

// Creating a deep copy with Lodash
let deepCopy = lodash.cloneDeep(employee);

// Modifying the copy
deepCopy.ename = "Beck";

// The original object's properties and methods are unaffected.
console.log("Original Details:", employee.details());
console.log("Deep Copy Details:", deepCopy.details());