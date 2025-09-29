//Comma Operator (,) mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand. 
let n1, n2
const res = (n1 = 1, n2 = 2, n1 + n2);
console.log(res);

// Each expression is evaluated from left to right.
// The final result of the expression is the rightmost value.