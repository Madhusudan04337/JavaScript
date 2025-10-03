// Declared with an asterisk *, these functions can pause execution using yield and resume later. 
// Useful for lazy loading values or handling iterators.
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2