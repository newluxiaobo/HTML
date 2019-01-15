

const http = require("http")
const url = require("url")

http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    let req_url = url.parse(req.url)
    // console.log(req_url);
    showPage(req_url.pathname,res)
    // res.write("这是响应!!")
    res.end()
}).listen(8080)


function showPage(pathname,res){
    switch (pathname){
        case "/favicon.ico":
            break;
        case "/home":
            res.write("<h1 style='color:red'>首页</h1>")
            break;
        case "/about":
            res.write("<h2>关于</h2>")
            break;
        default:
            break;
    }
}