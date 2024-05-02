//lexical scope
  const myVar = "value1";
  function myApp(){
    function myFunc(){
        const myVar="value48"
        console.log("inside the myFunc",myVar);
    }
    console.log(myVar);
     myFunc();
}
myApp();
