// The trim() method removes whitespace from both ends of a string.

let text = 'Hello    ';
console.log("Original length:", text.length);

let newText = text.trim();
console.log("New length after trim:", newText.length);
console.log("Trimmed string:", newText);

/*
Expected Output:
Original length: 9
New length after trim: 5
Trimmed string: Hello
*/