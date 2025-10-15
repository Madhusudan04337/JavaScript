// Objects can have computed properties using getters (to read) and setters (to write).
// This allows for controlled access to properties.

let user = {
    fName: 'Alex',
    lName: 'Smith',
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set fullName(name) {
        [this.fName, this.lName] = name.split(' ');
    }
};

// Using the getter
console.log(user.fullName);

// Using the setter
user.fullName = 'Jane Doe';
console.log(user.fName);
console.log(user.lName);