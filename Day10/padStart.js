// The padStart() method pads the current string from the start with another string
// until the resulting string reaches the desired length.

let stone = "Soul";

// Pads the start of the string until it is 9 characters long
stone = stone.padStart(9, "Mind ");

console.log(stone);

/*
Expected Output:
Mind Soul
*/