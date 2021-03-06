// 1.什么是网络
// 网络,network  计算机网络,它是指处于不同地理位置的多台具有独立功能的计算机,通过通信设备和通信介质互连起来
// 并且以功能完善的网络软件进行管理,实现网络资源共享和信息传递的系统
// IP: 地址  计算机的地址  在网络中的地址,  通过IP 来访问和定位计算机的位置
// 局域网:内网
// 广域网:外网
// 客户端、服务器
// 请求,响应
/**
 * 客户端 一般情况下 是用户用于交互,主要移动端和PC端
 * C/S  B/S  C client B  Bowser C和B 都是客户端
 * 
 * 服务器 Service   它是指一个管理资源并为用户提供服务的计算机软件
 * 稳定性,安全性,性能
 * 
 */


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
