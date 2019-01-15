const fs = require("fs");

// 判断是否为文件
function whatIs(path){
    var state = 1
    fs.stat(path,(err,stats)=>{
        if(err){
            console.log("当前路径不存在!!");
            return
        }
        if(stats.isFile){
            state = 1
            console.log("是文件");
            return state
        }else if(stats.isDirectory){
            state = 0
            console.log("是目录");
            return state
        }
    })
    return state
}

//创建目录
function setDir(path){
    fs.mkdir(path,(err)=>{
        if(err){
            throw err;
        }
        console.log("创建成功!目录文件名>>>>:"+path);
    })
}



// 增
function addWords(path,words){
    fs.writeFile(path,words,{flag:"a+"},(err)=>{
        if(err){
            throw err;
        }
    })
}

// 删
function delWords(path){
    fs.writeFile(path,"",(err)=>{
        if(err){
            throw err;
        }
    })
}
// 读
function readWords(path){
    fs.readFile(path,(err,data)=>{
        if(err){
            throw err;
        }
        console.log(data.toString());
    })
}
// 重写
function writeWords(path,words){
    fs.writeFile(path,"",(err)=>{
        if(err){
            throw err;
        }
    })
    fs.writeFile(path,words,{flag:"a+"},(err)=>{
        if(err){
            throw err;
        }
    })

}

addWords("./text.txt","hello")
delWords("./input.txt")
readWords("./text.txt")
writeWords("./input.txt","new words")
readWords("./input.txt")
