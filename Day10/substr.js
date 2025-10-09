// The substr() method returns a specified number of characters from a specified index.
// Note: substr() is considered a legacy feature and may be deprecated.
// It's recommended to use substring() or slice() instead.

let str = "Mind, Power, Soul";

// Starts at index 6 and extracts 5 characters
let part = str.substr(6, 5);

console.log(part);

/*
Expected Output:
Power
*/