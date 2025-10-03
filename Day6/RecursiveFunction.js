// A function that calls itself until a condition is met. 
// Very useful for problems like factorial, Fibonacci, or tree traversals.
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120