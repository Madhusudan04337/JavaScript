// A special type of function used to create multiple objects with the same structure. It’s called with the new keyword.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Neha", 22);
console.log(user.name); // Neha