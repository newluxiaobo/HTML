const Express = require("express");
const Path = require("path");
const BodyParser = require("body-parser")


const app = Express()

app.use(Express.static(Path.join(__dirname,"public")))
app.use(Express.static(Path.join(__dirname,"images")))

app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())


app.get("/",(req,res)=>{
    // res.send("")
    // res.redirect('http://www.baidu.com')
    
    res.redirect("index2.html")
    // res.redirect(200,"index2.html")

})

var users = {
    info:[
        {name:"13673998722",pw:"123456"},
        {name:"13122347019",pw:"123456"}
    ]
}

app.post("/login",(req,res)=>{
    // 对用户名和密码进行验证 安全等级
    // 加密之后的数据
    console.log(req.body);
    // res.send(req.body)
    if(req.body.uname == users.info[0].name){
        if(req.body.upwd != users.info[0].pw){
            // 密码不正确
            // 局部刷新
            // res.send("密码错误")
            let msg = {
                msg:"密码错误",
                err:true
            }
            res.send(JSON.stringify(msg))
        }else{
            // 如果密码正确 
            // 要进行跳转/重定向   home 主页面
            // res.redirect("home.html")
            let msg = {
                msg:"登录成功!",
                err:false
            }
            res.send(JSON.stringify(msg))
            
        }
    }else{
        let msg = {
            msg:"用户名不存在",
            err:true
        }
        res.send(JSON.stringify(msg))
    }
    
})



app.get("/register",(req,res)=>{
    res.redirect("register.html")
})




app.listen(8888)