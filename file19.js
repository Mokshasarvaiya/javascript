// how to clone array 

// method 1: varName.slice(0)
// let array1 = ["item1","item2"];
// let array2 = array1.slice(0);
// array1.push("item3")
// console.log(array1);
// console.log(array2);
// console.log(array1==array2);

// method 2 : [].concat(varName)
// let array1 = ["item1","item2"];
// let array2 = [].concat(array1);
// array1.push("item3")
// console.log(array1);
// console.log(array2);
// console.log(array1==array2);

//method 3 : spread operator
// let array1 = ["item1","item2"];
// let array2 = [...array1];
// array1.push("item3")
// console.log(array1);
// console.log(array2);
// console.log(array1==array2);

//task :
let array1 = ["apple","banana"];
let array2 = [...array1, "chickoo"];  
console.log(array1);
console.log(array2);
console.log(array1==array2);