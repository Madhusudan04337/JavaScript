// The reduce() method executes a user-supplied "reducer" callback function on each
// element of the array, in order, passing in the return value from the calculation
// on the preceding element. The final result is a single value.

let a = [88, 50, 25, 10];

function geeks(total, num) {
    return total - num;
}

// 88 is the initial value for 'total', then it becomes:
// (88 - 50) = 38
// (38 - 25) = 13
// (13 - 10) = 3
let sub = a.reduce(geeks);

console.log(sub);

/*
Expected Output:
3
*/