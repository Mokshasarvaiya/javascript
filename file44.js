// important array method
// for Each


//  const array = [4,5,8,9]
    
// array.forEach(function(num,i){
//     console.log(num*2," & index is :",i);
// })

const User = [{Name:"alex",Age:21},
             {Name:"bob",Age:24},
             {Name:"cat",Age:23},
             {Name:"dog",Age:20}
]
User.forEach(function(User){
    console.log(User.Name);
})