// spread operator in object
const obj1 = {
    key1 : "val1",
    key2 : "val2"
}
 const obj2 = {
    key3: "val3",
    key4: "val4"
 }
 const newObject = {...obj1,...obj2}
 console.log(newObject);