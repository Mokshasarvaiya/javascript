//nested destructuring
const users = [
    {Name:"alex",age:21,surName:"patel"},
    {Name:"bob",age:24,surName:"panchal"},
    {Name:"cop",age:22,surName:"prajapati"}
]
  const [{Name},{surName}]= users;
  console.log(Name+" "+surName)
