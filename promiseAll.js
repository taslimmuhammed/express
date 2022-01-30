const Promise = require('promise')
const {resolve,reject} =require('promise')
function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("nikhil")
        },3000)
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("258864558")
        },2000)
    })
}

Promise.all([getName(),getMobile()]).then((res)=>console.log(res))

// async function getUser(){
//     let name=await getName()
//     console.log(name)
// }
// getUser()