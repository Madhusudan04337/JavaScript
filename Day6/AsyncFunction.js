// Functions that handle asynchronous tasks. 
// Declared with async, they return a Promise, and you can use await inside them to pause until another Promise resolves.
async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log); // Data fetched!