const Express = require("express");
const bodyParser = require("body-parser");
const Multer = require("multer")
const path = require("path")
const fs = require("fs")
const app = Express()

app.use(Express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended:false}))
app.use(Express.static(path.join(__dirname,"sources")))

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

function mkdir(filepath){
    fs.mkdir(filepath,err=>{
        if(err){
            throw err;
        }
    })
}


let saveAddress = Multer.diskStorage({
    destination:(req,file,cb)=>{
        let adres = "sources/images/"
        let uname = req.body.uname
        adres = adres + uname + "/"
        mkdir(adres)
        let date = new Date()
        let forDate = String(date.getFullYear())+(date.getMonth()+1)+date.getDate()
        adres = adres + forDate + "/"
        mkdir(adres)
        cb(null,path.join(__dirname,adres))
    },
    filename:(req,file,cb)=>{
        fname = Date.now() + path.extname(file.originalname)
        cb(null,fname)
    }
})


let multer = Multer({storage:saveAddress})
let single = multer.single("img")

app.post("/upload",single,(req,res)=>{
    res.send("上传成功!!")
})



app.listen(9999)