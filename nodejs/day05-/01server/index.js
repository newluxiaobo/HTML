const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const multer = require("multer")
// 获取文件上传
//第一步:导入 第三方模块 multer
/**multer 它是用于构建和处理 文件上传的中间件
 * 作用是用来获取上传内容,对内容进行存储操作
 * 方便服务器对文件进行操作
 */
const app = express()

app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"sources")))
app.use(bodyParser.json())
// 第二步: 配置存储属性
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve("sources/pictures"))
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})
// 第三步: 将配置好的属性应用到服务中
const upload = multer({storage:storage})

// 第四步: 指定POST请求的上传属性 也就是说上传功能应用到哪个POST请求

app.post("/upload",upload.single("files"),(req,res)=>{
    // console.log(req.body.files);
    res.send("ok")
})

app.listen(9000)