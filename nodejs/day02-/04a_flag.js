const fs = require("fs")

fs.open("./input.txt","a+",(err,fd)=>{
    if (err) {
        throw err;
    }
    // console.log(fd.toString());
    fs.readFile("./input.txt",(err,data)=>{
        if(err){
            throw err;
        }
        // console.log(data.toString());
        fs.writeFile("./input.txt","hello world",{flag:"a"},(err)=>{
            if (err){
                throw err;
            }
        })
    })
})



// 文件操作的其他API

// 判断是否是文件或者是目录
fs.stat("./input.txt",(err,stats)=>{
    if(err){
        throw err;
    }
    if(stats.isFile){
        console.log("是文件");
    
    }else if(stats.isDirectory){
        console.log("是目录");
        
    }
})

// 创建目录
// fs.mkdir("./myfloder/",(err)=>{
//     if(err){
//         throw err;
//     }
// })
// fs.rmdir("./myfloder/",(err)=>{
//     if(err){
//         throw err;
//     }
// })


// 读取一个文件夹
fs.readdir(".../day02/",(err,files)=>{
    if(err){
        throw err;
    }
    console.log(files);
    
})

//删除文件
fs.unlink("./homework/112/1.js",(err)=>{
    if(err){
        throw err;
    }
})


// nodejs 文件系统模块 fs 中的方法, 均有同步和异步版本
// 异步版本的方法,最后一个参数均为回调函数,利用这个回调函数去完成对应的文件操作
// 建议使用异步方法,因为它比同步性能更高,速度更快并且没有阻塞
// nodejs 非阻塞 I/0