// Events propagate in two phases: capturing (down to the element) and bubbling (up from the element).
// The third argument in addEventListener (true) sets it to trigger on the capturing phase.
// event.stopPropagation() prevents the event from continuing its propagation.

// Assuming an HTML structure like: <div><button>Click</button></div>
let div = document.querySelector("div");
let button = document.querySelector("button");

// This listener is set to capture, so it fires first as the event travels down.
div.addEventListener("click", () => {
    console.log("Div clicked (Capturing Phase)");
}, true);

// This listener fires on the bubble phase (default) after the button is clicked.
button.addEventListener("click", (event) => {
    console.log("Button clicked");
    // This stops the event from bubbling up to the div's bubbling phase listener.
    event.stopPropagation();
});