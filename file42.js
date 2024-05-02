//callback function
 function myFunc(){
    console.log("inside myFunc");
 } 
    

    function callBack(callback){
        console.log("inside callback");
        callback()
    }
 

 callBack(myFunc);