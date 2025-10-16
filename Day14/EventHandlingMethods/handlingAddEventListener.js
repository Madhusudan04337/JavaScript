// The addEventListener() method is the modern, preferred way to handle events.
// It allows you to add multiple event listeners for the same event and offers more control.
// Note: This code requires an HTML file with an element having id="myButton".

let btn = document.getElementById("myButton");

btn.addEventListener("click", () => {
    alert("Button clicked using addEventListener!");
});