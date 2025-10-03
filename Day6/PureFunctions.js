// Pure functions return the same output for the same inputs and do not produce side effects. 
// They do not modify state outside their scope, such as modifying global variables, 
// changing the state of objects passed as arguments, or performing I/O operations.

function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3));