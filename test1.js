const myArr = [2,3,4,5,6];

const resultMap = myArr.map((num)=>{
   return num+2;
})

const resultEach = myArr.forEach((num)=>{
    return num+2;
 })

 console.log(resultMap);
 console.log(resultEach);