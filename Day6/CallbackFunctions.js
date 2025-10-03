// A callback function is passed as an argument to another function and is executed after the completion of that function.
function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));