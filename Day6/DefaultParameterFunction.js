// A function where parameters have default values if no argument is passed. Helps avoid undefined issues.

function greet(name = "Guest") {
  return "Hello, " + name;
}
console.log(greet());      // Hello, Guest
console.log(greet("Aman"));// Hello, Aman