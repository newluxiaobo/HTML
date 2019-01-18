const Express = require("express")
const bodyParser = require("body-parser")
const Multer = require("multer")
const Path = require("path")

const app = Express()

app.use(Express.static(Path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended:false}))

// let uploadDir = Path.join(__dirname,"images/")

// let multer = Multer({dest:uploadDir})

let st = Multer.diskStorage({
    destination:(req,file,cb)=>{
        // console.log(file);
        console.log(req.body.uname);
        cb(null,Path.join(__dirname,"sources/images"))
    },
    filename:(req,file,cb)=>{
        cb(null,"1.jpg")
    }
})
let multer = Multer({storage:st})
let single = multer.single("logo")

app.post("/upload",single,(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})


app.listen(9000)






//  1.功能:存储用户的图片 指定用户,图片要存储到对应的目录下 目录的名称: 用户名,用户名 手机号 
//  2.用户目录下使用时间格式进行目录分类,例如20190117
//  3.对应时间上传的文件, 存储到对应的时间目录下
//  4.文件的名称使用时间time毫秒+文件后缀 为新的文件名称 不能修改原有文件后缀