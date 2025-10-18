// This script demonstrates event delegation, a practical use case for event bubbling.
// A single event listener on a parent element can manage events for all its children.
// Note: This requires an HTML structure with a parent element (e.g., id="parent")
// and multiple child elements inside it.

const parentElement = document.getElementById('parent');

parentElement.addEventListener('click', (event) => {
    // The 'event.target' property identifies the actual child element that was clicked.
    if (event.target && event.target.matches("button.child-button")) {
        console.log('A child button was clicked:', event.target.textContent);
    }
});