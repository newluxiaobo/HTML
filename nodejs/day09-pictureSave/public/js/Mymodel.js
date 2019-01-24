// 目录,文件判断
var fs = require("fs")
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

module.exports = whatIs
module.exports = mkdir
module.exports = del
module.exports = readdir