// how to iterate object
const person = {
    name:"sweetie",
    age: "21",
    hobbies : ["dance","sing","read"]
 };
 
 // for in loop ==> 1
 // object.keys  ==>2 
//  for(let val in person){

    // console.log(val) ;
    // console.log(person[val]);
    // console.log(`${val} : ${person[val]}`);
//  }

 // Object.keys
//  console.log(Object.keys(person))

// for of loop 
for (let key of Object.keys(person)){
    //   console.log(key);
    //   console.log(person[key]);
    console.log(`${key}: ${person[key]}`);
}

