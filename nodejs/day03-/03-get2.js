const http = require("http")

const url = require("url")

http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    let gets = url.parse(req.url,true)
    console.log(gets.query);
    res.end()
}).listen(9000)