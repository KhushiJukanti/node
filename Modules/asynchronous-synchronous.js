const fs = require("fs")

// console.log("1")
// console.log("2")
// console.log("3")

// console.log("1")

// setTimeout(()=>{
//     console.log("2")
// },0)
// console.log("3")


// Asynchronous/

// fs.readFile("profile.txt", "utf-8",function(err, data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

let data = fs.readFileSync("profile.txt", "utf-8")

console.log(data)

console.log("Hiii")

