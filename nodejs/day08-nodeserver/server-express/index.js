const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()


app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"css")))
app.use(bodyParser.urlencoded({extended:false}))
var uid = {
    un:"jack",
    up:123456
}

app.post("/login",(req,res)=>{
    let get_info = req.body
    let msg = {
        msg:"",
        err:false
    }
    if(req.body){
        if(get_info.un==uid.un){
            if(get_info.up==uid.up){
                msg.msg = "登录成功"
                msg.err = true
                res.send(JSON.stringify(msg))
            }else{
                msg.msg = "密码错误"
                res.send(JSON.stringify(msg))
            }
        }else{
            msg.msg = "用户名错误"
            res.send(JSON.stringify(msg))
        }
    }
})


app.post("/register",(req,res)=>{
    let get_info = req.body
    let msg = {
        msg:"",
        err:false
    }
    if(req.body){
        if(get_info.un!=null || get_info.un!="" && get_info.un!=uid.un){
            if(get_info.up!=null || get_info.up!=""){
                msg.msg = "注册成功"
                msg.err = true
                res.send(JSON.stringify(msg))
            }else{
                msg.msg = "当前用户已存在"
                res.send(JSON.stringify(msg))
            }
        }
    }
})



app.listen(5000)