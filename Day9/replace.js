// Replace occurrences of a substring using the replace() method.
// To replace all occurrences, use a regular expression with the global 'g' flag.

let s1 = 'Learn HTML at GfG and HTML is useful';
let s2 = s1.replace(/HTML/g, 'JavaScript');

console.log(s2);

/*
Expected Output:
Learn JavaScript at GfG and JavaScript is useful
*/