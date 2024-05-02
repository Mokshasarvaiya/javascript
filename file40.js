//rest parameter
// const myFun=(a,b,...c)=>{
//     console.log("a is :",a);
//     console.log("b is :",b);
//     console.log("c is :",c);
// }
// myFun(5,3,7,2,4,1,9)

const addAll= (...nums) =>{
    let total = 0;
    for (let num of nums) {
        total = total+num;
    }
    return total;
}
console.log(addAll(1,2,3,4,5,6,7,8,9))