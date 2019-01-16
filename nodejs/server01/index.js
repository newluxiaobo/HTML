/**
 * 使用步骤:
 * 
 * 
 * 
 * 2. 安装Express 包/模块
 * cnpm install express --save
 * 或者 cnpm i express --s
 * 
 * 3.
 * 
 * 4.初始化 express 对象
 * const app = express()
 * 
 * 5. 使用get方法 来处理GET请求
 * 路由:是指对浏览器笛之爱的一种解析,
 * 通过这种解析的路径可以实现不同模块(数据),
 * 从而实现不同的页面和功能,这个路径称之为路由.
 * 
 * 
 * get(路由,callback)
 */




const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/home",(req,res)=>{
    res.send("home"+req.query.uname)
    console.log(req.query);
})

app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send("<h1>post 111</h1>")
    
})


app.listen(9001,()=>{
    console.log("Server is running,port is :9001");
    
})