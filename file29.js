//object destructring
 const band = {
    bandName:"led zepplin",
    famousSong:"strairway to Heaven",
    year: 1998,
 };
 let {bandName,famousSong,...restprops}=band                      
 console.log(restprops);