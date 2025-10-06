// The splice() method changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place.
// Syntax: array.splice(start_index, delete_count, item1, item2, ...)

let a = [20, 30, 40, 50];

// From index 1, remove 3 elements
a.splice(1, 3); // a is now [20]

// From index 1, remove 0 elements and insert 3, 4, and 5
a.splice(1, 0, 3, 4, 5); // a is now [20, 3, 4, 5]

console.log(a);

/*
Expected Output:
[ 20, 3, 4, 5 ]
*/