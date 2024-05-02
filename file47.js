//reduce method
const userCart =[
    {id:1,productName:"shoes",productPrice:2000},
    {id:2,productName:"shirt",productPrice:3000},
    {id:3,productName:"skirt",productPrice:4000}
]
const addAmount =userCart.reduce ((totalVal,currentVal)=> {
      return totalVal+ currentVal.productPrice;

}, 0);

console.log(addAmount);