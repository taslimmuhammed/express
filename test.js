var http=  require('http')
var fs= require('fs')
var url = require('url')

http.createServer(server).listen(7000,  ()=> console.log("server Started"))

function server(req, res){
    var q= url.parse(req.url,true)
    console.log(q.pathname)
    p=q.pathname
   if(p==='/') {
    fs.readFile('sampleHtml.html',(err,data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(data)
        res.end()
        } 
    )}
    
    else if(p==='/signup'){
   
        fs.readFile("signUp.html", (err,data)=>{
          res.write(data)
          res.end()

        })
    }
    else if(p==="/signupacton"){
        res.writeHead(200,{'Content-Type': 'text/html'})
    console.log(q.query)
    res.write("<h1>"+q.query.fname+"</h1>")
    res.end()
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'})
        res.write("error")
        res.end()
    }
  
}