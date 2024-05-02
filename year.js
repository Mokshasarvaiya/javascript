var year = 1998;
var century = findCentury(year)
function findCentury (year){
  var century = Math.ceil(year/100);
return century ;
}


  console.log(century);