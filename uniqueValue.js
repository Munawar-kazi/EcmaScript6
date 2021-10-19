let Array=["a","b","c","d","e","a","c","a","f"];
// console.log(Array);

let Array1=["g","h","i","j","k","g","h","i","l","m","o","p"];
// console.log(Array1);

let spread=[...Array,...Array1];  //using spread operator for concatonation two or more arrays
console.log(spread);
let unique=[];
// unique.push("ayaan","kazi","ayaan");
// console.log(unique)

// Array.forEach(element => {
//     if(!unique.includes(element)){
//         unique.push(element)
//     };
    
// });
// console.log(unique);

spread.forEach(element=>{               //separated unique value inludes
    if(!unique.includes(element)){
        unique.push(element)
    }
});

console.log(unique);

for(key in unique){
    console.log(unique[key]);
}
///munawar kazi//// desktop changes////