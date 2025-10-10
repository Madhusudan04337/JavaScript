// Tagged templates allow you to parse a template literal with a function,
// giving you more control over the output.

// The first argument is an array of the static string parts.
// Subsequent arguments are the evaluated expressions.
function customTag(staticParts, ...expressions) {
    // Reconstruct the string for this simple example
    return staticParts[0] + expressions.join("") + staticParts[1];
}

const name = "Alice";
const result = customTag`Hello, ${name}!`; // The function is called with the template literal
console.log(result);