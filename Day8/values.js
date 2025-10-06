// The values() method returns a new Array Iterator object that contains
// the values for each index in the array.

const a = ["Apple", "Banana", "Cherry"];
const iterator = a.values();

// We can loop over the iterator to get the values.
for (const value of iterator) {
    console.log(value);
}

/*
Expected Output:
Apple
Banana
Cherry
*/