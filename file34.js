//arrow function

const song = ()  => {
    console. log("Happy Birthday to You Baby💖...");
}
song();


const add = (a,b,c) => {
    return a+b+c;
}
console.log(add(2,5,8));




const isEven= (n)=>{
    if(n/2===0){
        return true;
      }
        else{
            return false;
        }
} 
 console.log(isEven(9));



  const string=(str)=>{
    return str[3];
  }
  console.log(string("Baby"));




const task = (array,target)=>{
    for(let i =0; i<array.length; i++){
        if(array[i]===target){
         return i;
        }
       
     }
     return -1; 
}
const myArray = [2,6,8,9,20]
const ans = task(myArray,20);
console.log(ans);