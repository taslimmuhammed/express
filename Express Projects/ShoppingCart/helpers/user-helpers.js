const { reject, resolve } = require('promise')
var db = require('../Config/Connections')
var Collection = require('../Config/collections')
const bcrypt  =require('bcrypt')
const { status } = require('express/lib/response')
module.exports = {
    doSignup:(userData)=>{
        return new Promise(async(resolve, reject)=>{
            userData.password  =await  bcrypt.hash(userData.password,10)
            db.get().collection(Collection.USER_COLLECTION).insertOne(userData).
            then((data)=> resolve(data.insertedId.toString()))
        })
    },
     
    doLogin:(userData)=>{
      return new Promise(async(resolve, reject)=>{
          let loginStatus = false
          let response={}
          let user  = await db.get().collection(Collection.USER_COLLECTION).findOne({email:userData.email})
          if(user){
              bcrypt.compare(userData.password, user.password).then((status)=>{
               if(status){
                //    console.log("Login Success")
                   response.user =user
                   response.status=true
                //    console.log(response)
                   resolve(response)
               }
               else{ 
               resolve({status:false})}
              })
          }
          else{ alert("Wrong UserId")
          resolve({status:false})}
      })
    }
}