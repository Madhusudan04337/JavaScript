// A for...in loop iterates over all enumerable properties of an object, including inherited ones.
// Use .hasOwnProperty() to filter for only the object’s own properties.

function iterateWithForIn() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };

    for (let key in exampleObj) {
        if (exampleObj.hasOwnProperty(key)) {
            let value = exampleObj[key];
            console.log(key, value);
        }
    }
}
iterateWithForIn();