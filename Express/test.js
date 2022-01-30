const path = require("path")
const express = require("express")
const app = express()


app.use((req,res,next)=>{
    console.log("hello")
    next()
})


app.get("/sign",function(req,res,next){
    res.sendFile(path.join(__dirname,"sampleHtml.html"))
    console.log("middle")
    next()
})

// app.get("/signup",(req, res,next)=>{
//     res.sendFile(`${__dirname}/signUp.html`)
//     next()
// })
app.use((req,res,next)=>{
    console.log("end")
    next()
})
app.post("/sign", (req, res)=>{
    res.send("account created")
})

app.get("/about",(req,res)=>{
    res.send("about")
})

app.listen(7000,()=>{
    console.log(__filename)
    console.log("server Started")
})