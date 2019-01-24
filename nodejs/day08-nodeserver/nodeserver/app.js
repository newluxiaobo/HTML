// 这是服务器端应用程序,提供了web应用服务
// 作用是为 客户端访问提供 数据服务

// 1.引入http服务模块
const http = require("http")
// 2. 引入url模块   对URL进行解析
const url = require("url")

// 3. 初始化 应用服务
let server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    //home about login register
    // 5. 获取请求中的url的path(目录)
    let pathname = url.parse(req.url).pathname;
    // console.log(pathname);
    // 6. 路径处理(路由)
    showPage(pathname,res)
    res.end()
})
// 4. 启动应用服务
server.listen(9002)


// 7. 实现对路径的处理(数据的处理)
function showPage(pn,res){
    switch (pn){
        case "/favicon.ico":
            break;

        case "/home/":
            res.write("<h1>首页</h1>")
            break;

        case "/about/":
        res.write("<h1>about</h1>")
        break;

        case "/login/":
        let html_content = `
        <h1>欢迎登陆</h1>
        <form action="/register/">
            <input type="text" name="uname">
            <input type="submit" value="注册">
        </form>
        `
        res.write(html_content)
        break;

        case "/register/":
        // res.write("<h1>register</h1>")
        // 写JSON 数据
        // 1.键值对  2.最外层{ } 3.值得类型:6种
        let json_data = {
            uname:"tom",
            uage:18,
            ufriends:["jack","rose"],
            marry:false,
            uhouse:null,
            ulike:{like:"play"},
            usex:"M",
            bg:"no"
        }
        let json_string = JSON.stringify(json_data)
        res.write(json_string)
        break;

        default:
        res.write("<h1>404</h1>")
        break;

    }
}

/**
 * 服务器端原理:
 * 使用node.js 作为后端的开发项目,客户访问过程:
 * 客户端发起请求-->node.js 服务器接收到请求并解析、运算-->返回结果对客户端完成相应
 */
