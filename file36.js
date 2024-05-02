//function inside function
const app = ()=>{
    const application= ()=>{
        console.log("inside application ");
    }
    application();
   const add= (a,b)=>{
     return a+b;
     
   }
  console.log( add(5,2));

    console.log("inside app");
}
app();