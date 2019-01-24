const Express = require("express")
const BodyParser = require("body-parser")
const Multer = require("multer")
const Path = require("path")
const Mymodel = require("./public/js/Mymodel")
const fs = require("fs")

const app = Express()


app.use(Express.static(Path.join(__dirname,"public")))
app.use(BodyParser.urlencoded({extended:false}))
app.use(Express.static(Path.join(__dirname,"sources")))
app.use(BodyParser.json())

var users = {
    info:[
        {uid:"13673998722",upwd:"123456",uname:"rabbit"},
        {uid:"13122347019",upwd:"123456",uname:"rabbit2"}
    ]
}

app.get("/",(req,res)=>{
    
})

app.post("/login",(req,res)=>{
    for(let i=0;i<users.info.length-1;i++){
        if(req.body.uid == users.info[i].uid){
            if(req.body.upwd != users.info[i].upwd){
                let msg = {
                    msg:"密码错误",
                    err:true
                }
                res.send(JSON.stringify(msg))
            }else{
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
    }    
})

app.get("/showlist",(req,res)=>{
    

})














function whatIs(filepath){
    var state = 1
    fs.stat(filepath,(err,stats)=>{
        if(err){
            throw err;
        }
        if(stats.isFile){
            state = 1
        }else if(stats.isDirectory){
            state = 0
        }
        return state
    })
}


//创建目录
function mkdir(filepath){
    fs.mkdir(filepath,err=>{
        if(err){
            throw err;
        }
    })
}
//文件删除
function del(filepath){
    fs.unlink(filepath,(err)=>{
        if(err){
            return console.error(err);
        }
    })
}

//读取目录
function readdir(dirpath){
    fs.readdir(dirpath,(err,files)=>{
        if(err){
            return console.error(err);
            
        }
        files.forEach((file)=>{
            console.log(file);
        });
    });
}

//读取文件
function readFile(filepath,res){
    fs.readFile(filepath,(err,data)=>{
        if(err){
            console.error(err);
        }else{
            res.write(data)
        }
    })
}

app.listen(5555)