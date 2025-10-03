// Uses ... to collect all remaining arguments into an array,
// Very useful when you don’t know how many arguments will be passed.
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10