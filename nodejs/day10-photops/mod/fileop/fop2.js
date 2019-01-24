//封装文件操作模块
const fs = require("fs")
const path = require("path")


function full_path(fp){
    return path.join(process.cwd(),fp)
}
// 是否是文件
function is_file(fp,cb){
    // 2.异步判断
    fs.exists(fp,(exist)=>{
        // exists  true 表示是文件
        cb(exist)
    })
}

function f_read(fp,cb){
    // 1.判断是否是文件
    fp = full_path(fp)
    is_file(fp,function(res){
        if(res){
            // 3.读取文件
            fs.readFile(fp,(err,data)=>{
                if(err) throw err;
                cb(null,data.toString());
            })
        }else{
            console.log("文件不存在");
            cb(res,null)
        }
    })
}


//写文件

function f_write(fp,info,cb){
    fp = full_path(fp)
    is_file(fp,function(res){
        if(res){
            fs.readFile(fp,(err,data)=>{
                if(err){
                    throw err;
                }
                let obj = data.toString()
                if(obj != "" || obj != null){
                    obj = JSON.parse(obj)
                    if(obj.hasOwnProperty("users")){
                        obj["users"].push(info)
                    }else{
                        obj["users"] = []
                        obj["users"].push(info)
                    }
                    obj = JSON.stringify(obj)
                    fs.writeFile(fp,obj,(err)=>{
                        if(err){
                            throw err;
                        }
                        cb(null,"写入成功")
                    })
                }else{
                    console.log("没有内容");
                    cb(null,"没有内容")
                }
            })
        }else{
            cb(res,"文件不存在")
        }
    })
}

// 读取用户S目录
function r_dir(dp,cb){
    dp = full_path(dp)    
    is_file(dp,(result)=>{
        if(result){
            fs.readdir(dp,(err,files)=>{
                if(err){
                    cb(false,null)
                }
                cb(null,files)
            })
        }else{
            console.log("文件不存在");
            cb(result,null)
        }
    })
    
}


// 创建用户目录
//dp 用户目录: /sources/users/13673998722
//图片目录: /sources/users/13673998722/创建目录的规则(采用的是时间)
//创建文件夹
function mkdir(dp,cb){
    dp = full_path(dp)
    // console.log(path);
    //判断是否
    is_file(dp,(res)=>{
        if(!res){
            fs.mkdir(dp,(err)=>{
                if(err){
                    cb(true,{
                        msg:文件创建失败,
                        code:"6001"
                    })
                }
                cb(false,{
                    msg:"文件创建成功",
                    code:""
                })
            })
        }else{
            cb(false,{
            msg:"文件已存在",
            code:""
            })
        }
        
    })
    
}



module.exports = {
    fread:f_read,
    fwrite:f_write,
    rfiles:r_dir,
    fmkdir:mkdir
}




/**修改用户信息
 * 用户查找
 * 用户信息修改
 * 保存
 */
/*
function f_edit(fp,info,cb){
    fp = full_path(fp)
    is_file(fp,function(res){
        if(res){
            fs.readFile(fp,(err,data)=>{
                if(err){
                    throw err;
                }
                let obj = data.toString()
                if(obj != "" || obj != null){
                    obj = JSON.parse(obj)
                    if(obj.hasOwnProperty("users")){
                        obj["users"].push(info)
                    }else{
                        obj["users"] = []
                        obj["users"].push(info)
                    }
                    obj = JSON.stringify(obj)
                    fs.writeFile(fp,obj,(err)=>{
                        if(err){
                            throw err;
                        }
                        cb(null,"写入成功")
                    })
                }else{
                    console.log("没有内容");
                }
            })
        }else{
            cb(res,"文件不存在")
        }
    })
}

*/

/*
let u_info = {
    "uname":"12345678",
    "uage":12
}
f_write("./users.json",u_info,(err,res)=>{
    if(err){
        throw err;
    }
    console.log(res);
})
*/
/*
f_edit("./users.json",u_info,(err,res)=>{
    if(err){
        throw err;
    }
    console.log(res);
    
})
*/