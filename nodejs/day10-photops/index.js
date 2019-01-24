const Express = require('express')
const BodyParser = require('body-parser')
const Multer = require('multer')
const Path = require('path')
const cors = require("cors")

// 自定义模块
const oa = require('./mod/oauth/oauth')

const app = Express()
// 开放文件夹
app.use(Express.static(Path.join(__dirname,'public')))
app.use(Express.static(Path.join(__dirname, 'sources')))
app.use(Express.static(Path.join(__dirname,'sources/images')))

// 设置解析 form data 表单数据 针对 POST请求
app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())

// 设置存储路径
let st = Multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, Path.join(__dirname,'sources/images'))
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})

let multer = Multer({storage: st})


app.get("/favicon.ico",(req,res)=>{
    res.send("")
})

app.get('/',(req,res)=>{
    res.redirect('index.html')
})
app.use(cors())

// app.use(cors({
//     origin:['http://127.0.0.1:8080'],
//     methods:['GET','POST'],
//     alloweHeaders:['Conten-Type', 'Authorization']
// }));


app.get('/json',(req,res)=>{
	res.send(JSON.stringify({
		err:true,
		code:'8523'
	}))
})



//TODO: 注册
app.post('/register',(req,res)=>{
    // 1.判断用户是否合法 2.存储有效文件中
    let user = req.body
    oa.oauth(user,function (err,result){
        if(err){
            let obj = {
                code:"1001",    //用户不合法
                err:true
            }
            res.send(JSON.stringify(obj))
        }

        if(!result){    
            // 没有找到该用户 表示 这是新用户
            user["dirname"] = user.uname
            oa.add(user,(err,result)=>{
                if(err){
                    let obj = {
                        code:"50001",  //系统错误
                        err:true
                    }
                    res.send(JSON.stringify(obj))
                }
                if(result){
                    let obj = {
                        code:"",
                        err:false,
                        msg:"注册成功"
                    }
                    res.send(JSON.stringify(obj))
                }else{
                    let obj = {
                        code:"",
                        err:true,
                        msg:"注册失败"
                    }
                    res.send(JSON.stringify(obj))
                }
            })
        }else{
            // 有
            let obj = {
                code:"2001", //2001 表示用户已存在
                err:true
            }
            res.send(JSON.stringify(obj))
        }
    })
})





//登录
app.post("/login",(req,res)=>{
    let user = req.body
    oa.oauth(user,function (err,result){
        if(err){
            let obj = {
                code:"1001",    //用户不合法
                err:true
            }
            res.send(JSON.stringify(obj))
        }
        if(result){
            //有这个用户
            oa.match(user,(err,result)=>{
                if(err){
                    let obj = {
                        code:"50001",  //系统错误
                        err:true
                    }
                    res.send(JSON.stringify(obj))
                }
                if(result){
                    let obj = {
                        code: "",
                        err: false,
                        msg: "登录成功"
                    }
                    res.send(JSON.stringify(obj))
                }else{
                    let obj = {
                        code:"",
                        err:true,
                        msg:"用户名或密码不正确"
                    }
                    res.send(JSON.stringify(obj))
                }
            })
        }else{
            //没有这个用户
            let obj = {
                code:"该用户不存在", 
                err:true
            }
            res.send(JSON.stringify(obj))
        }
    })
})



app.get("/user",(req,res)=>{
    let user = req.query
    res.send(JSON.stringify({
        err:false,
        msg:"用户合法"
    }))
})


//获取用户时间线
app.get("/user/dlist",(req,res)=>{
    let user = req.query
    oa.oauth(user,(err,result)=>{
        if(err){
            res.send(JSON.stringify({
                err:true,
                msg:"验证失败"
            }))
        }
        if(result){
            user["userpath"] = user.uname
            // 有这个用户, 表示验证通过
            oa.files(user,(err,files2)=>{
                if(err){
                    res.send(JSON.stringify({
                        err:true,
                        msg:"目录不存在"
                    }))
                }
                //过滤
                let flist = []
                for(let i = 0; i < files2.length ;i++){
                    let item = files2[i]
                    if (item[0] != '.') {
                        flist.push(item)
                    }
                }

                files2 = flist
                res.send(JSON.stringify({
                    err:false,
                    files:files2
                }))
            })
        }
    })
})

//获取对应用户的图片
app.get("/user/plist",(req,res)=>{
    let user = req.query
    oa.oauth(user,function (err,result) {
        if (err) {
            res.send(JSON.stringify({
                err: true,
                msg: '验证失败'
            }))
        }
        if (result) {
            user["userpath"] = user.uname + '/' + user.dname
            oa.files(user,function (err,files) {
                if (err) {
                    res.send(JSON.stringify({
                        err: true,
                        msg: '目录不存在'
                    }))
                }
                res.send(JSON.stringify({
                    err: false,
                    files: files
                }))
            })
        }
    })
})



let single = multer.single("logo")

app.post("/user/add/pic",single,(req,res)=>{
    // console.log(req.file);
    res.send(JSON.stringify({
        code:"",
        msg:"上传成功",
        data:{
            src:req.file.path
        }
    }))
})





app.listen(8523)