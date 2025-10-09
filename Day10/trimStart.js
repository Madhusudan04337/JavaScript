// The trimStart() method removes whitespace from the beginning of a string.

let str = "  Soul";

console.log("Original:", `'${str}'`);

let part = str.trimStart();
console.log("Trimmed:", `'${part}'`);

/*
Expected Output:
Original: '  Soul'
Trimmed: 'Soul'
*/