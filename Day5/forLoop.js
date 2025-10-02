// for (let x = 2; x <= 4; x++) {
//     console.log("Value of x:" + x);
// }

// let x = 5
// for (let i = 1; i <= 10; i++) {
//   console.log(x * i); 
// }


// let arr = [10, 20, 30, 40];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]); 
// }


const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len;) {
    gfg += subjects[i];
    //can be increased inside loop
    i++;
}
console.log(gfg)