// Some elements have default browser actions (e.g., a link navigates to a new page).
// event.preventDefault() can be used to stop this default behavior.
// Note: This requires an HTML file with an <a> tag.

document.querySelector("a").addEventListener("click", (event) => {
    // Stop the link from navigating to the URL specified in its href.
    event.preventDefault();
    console.log("Default link navigation has been prevented.");
});