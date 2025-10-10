// A custom function can handle complex or repeated string interpolation tasks.

function interpolate(template, values) {
    // This regular expression finds all instances of ${key}
    return template.replace(/\${(.*?)}/g, (match, key) => values[key.trim()]);
}

const name = "Alice";
const template = "Hello, ${ name }!";
const result = interpolate(template, { name: name }); // Pass variables in an object
console.log(result);