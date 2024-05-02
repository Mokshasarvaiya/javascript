//param destructuring
 //object
 // react

 const person = {
    name:"Sweety",
    age:20
 }
 
 const Details =({name,age})=>{
    console.log(name);
    console.log(age);
 } 
 Details(person) 