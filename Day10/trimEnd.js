// The trimEnd() method removes whitespace from the end of a string.

let str = "Soul  ";

console.log("Original:", `'${str}'`);

let part = str.trimEnd();
console.log("Trimmed:", `'${part}'`);

/*
Expected Output:
Original: 'Soul  '
Trimmed: 'Soul'
*/