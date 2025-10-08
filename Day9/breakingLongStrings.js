// The recommended way to break a long string is with the + operator or template literals.
// Using a backslash (\) is not recommended.

// Recommended method
const s = "'GeeksforGeeks' is a" +
    " learning portal";

console.log(s);

/*
Expected Output:
'GeeksforGeeks' is a learning portal
*/