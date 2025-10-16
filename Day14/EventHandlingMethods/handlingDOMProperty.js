// You can assign a function directly to an element's 'on<event>' property.
// This is a step up from inline handlers but is less flexible than addEventListener.
// Note: This code requires an HTML file with an element having id="myButton".

let btn = document.getElementById("myButton");

// Assign a function to the onclick property
btn.onclick = () => {
      alert("Button clicked via DOM property!");
};