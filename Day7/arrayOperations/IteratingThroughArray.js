// We can iterate array and access array elements using for loop and forEach loop.

let a = ["HTML", "CSS", "JS"];

// Iterating through for loop
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

// Iterating through forEach loop
a.forEach(function (element) {
    console.log(element);
});