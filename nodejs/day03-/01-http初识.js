// 1.什么是网络
// 2.什么是HTML
// 3.什么是HTTP
// 4.HTTP是用来做什么的
// 5.什么是URL
// 6.HTTP的请求和响应是什么

// nodejs中自带一个模块  http模块, 专门用来处理HTTP

const http = require("http")
var server = http.createServer((request,response)=>{
    response.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    response.write("欢迎!!!!")
    response.write("<h1>欢迎!!!!</h1>")
    response.end("END")
})

server.listen(8080)
console.log("Server poat:8080");
