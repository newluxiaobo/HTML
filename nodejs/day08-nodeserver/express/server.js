const Express = require("express");
const path = require("path")
const app = Express()


app.use(Express.static(path.join(__dirname,"public")))
app.use(Express.static(path.join(__dirname,"sources")))

// 1.登陆的接口  API
// .login GET uname upasswd
var user_info = {
    uname:"jack",
    upasswd:"123456"
}




app.get("/register",(req,res)=>{
    let get_info = req.query
    if(get_info){
        if(get_info.uname!=null || get_info.uname!=""){
            if(get_info.upasswd!=null || get_info.upasswd!=""){
                user_info.uname = get_info.uname
                user_info.upasswd = get_info.upasswd
                let msg = {
                    uname:user_info.uname,
                    upasswd:user_info.upasswd
                }
                res.send(JSON.stringify(msg))
            }
        }else{
            let msg = {
                msg:"用户名不能为空"
            }
            res.send(JSON.stringify(msg))
        }
    }
    
})




app.get("/login",(req,res)=>{
    //req 用来处理请求的数据
    //res 用来处理响应的数据
    // request 对象,表示HTTP请求, 包括请求的字符串、参数、内容、HTTP头部等属性
    //常见的属性有:
    let app = req.app // 综合请求对象
    let baseUrl = req.baseUrl  //获取路由就是当前请求的URL路径
    let body = req.body  // GET无效、POST有效 请求体
    let hostname = req.hostname  // 获取主机名和端口
    let masterip = req.ip  // 获取IP
    let originalURL = req.originalUrl  // 获取原始请求的URL
    let parms = req.params  //获取路由的参数
    let query = req.query  //获取参数列表
    let router = req.route  //获取当前路由
    let header = req.header  //获取指定的HTTP请求头


    // res.send(`baseUrl:${baseUrl}
    // hostname:${hostname}
    // ip:${masterip}
    // Ourl:${originalURL}
    // parms:${parms}
    // query:${query}
    // router:${router}
    // header:${header}
    // `)

    let get_query = req.query
    if(get_query.uname === user_info.uname){
        let msg = {
            msg:"登录成功",
            err:false
        }
        if(get_query.upasswd === user_info.upasswd){
            res.send(JSON.stringify(msg))
        }else{
            msg.msg="密码错误";
            msg.err=true
            res.send(JSON.stringify(msg))
        }
    }else{
        let msg = {
            msg:"账号有误",
            err:true
        }
        res.send(JSON.stringify(msg))
    }


})

app.listen(8888)