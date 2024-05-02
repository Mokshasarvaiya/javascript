//map method
// const num = [ 2,4,6,8,9]
// const square = num.map((num,i) =>{
//     return `index:${i}  & num is ${num*num}`
// })

// console.log(square);

const User = [{Name:"alex",Age:21},
             {Name:"bob",Age:24},
             {Name:"cat",Age:23},
             {Name:"dog",Age:20}
]

const data =User.map((User)=>{
    return`${User.Name}`
})
console.log(data);
