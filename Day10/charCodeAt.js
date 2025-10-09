// The charCodeAt() method returns an integer between 0 and 65535 representing
// the UTF-16 code unit at the given index.

let company = 'Developer';
let moto = 'Code is the best platform\n\
to learn and experience\n\
Computer Science.';

// Return a number indicating Unicode
// value of character at index 0 ('D')
console.log(company.charCodeAt(0));

// Return a number indicating Unicode
// value of character at index 5 ('i')
console.log(moto.charCodeAt(5));

/*
Expected Output:
68
105
*/