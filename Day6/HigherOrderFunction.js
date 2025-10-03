// A function that either takes another function as a parameter or returns another function. 
// These are common in JavaScript (e.g., map, filter, reduce).
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10