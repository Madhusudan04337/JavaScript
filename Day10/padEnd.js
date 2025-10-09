// The padEnd() method pads the current string from the end with another string
// until the resulting string reaches the desired length.

let stone = "Soul";

// Pads the end of the string until it is 10 characters long
stone = stone.padEnd(10, " Power");

console.log(stone);

/*
Expected Output:
Soul Power
*/