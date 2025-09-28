function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }
}
console.log(checkAge(13)); 