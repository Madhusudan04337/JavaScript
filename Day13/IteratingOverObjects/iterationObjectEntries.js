// Object.entries() returns an array of an object’s own [key, value] pairs.
// You can then use array methods like .map() or .forEach() to iterate.

function iterateWithEntries() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };

    Object.entries(exampleObj).map(entry => {
        let key = entry[0];
        let value = entry[1];
        console.log(key, value);
    });
}
iterateWithEntries();