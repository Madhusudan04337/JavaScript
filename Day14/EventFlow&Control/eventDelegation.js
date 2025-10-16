// Event delegation involves attaching a single event listener to a parent element
// to manage events for all of its children. This is very efficient.
// Note: This requires an HTML file with a <ul> containing <li> elements.

document.querySelector("ul").addEventListener("click", (event) => {
    // Check if the clicked element was an LI
    if (event.target.tagName === "LI") {
        console.log(`Clicked on item: ${event.target.textContent}`);
    }
});