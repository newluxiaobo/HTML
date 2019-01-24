/* 用于处理用户验证 */
const fop = require('../fileop/fop2')
const path = require('path')
// users.json /




function oauth_user(user_info,cb) {
    // 读取文件
    // fop.fread('')
    // console.log(__dirname)
    // 获取当前 程序运行的 根目录
    // console.log(process.cwd())
    // 获取当前 程序运行的根目录
    // console.log(path.dirname(require.main.filename))
    // console.log(__filename)
    // console.log(path.dirname(__filename))
    // console.log(require.main.filename)
    fop.fread('sources/users.json',function (err,data){
        //对data进行匹配 user_info
        if(err){
            cb(err,null)
        }
        if((typeof JSON.parse(data))==(typeof JSON.parse("{}"))){
            //将数据进行过滤
            let obj = JSON.parse(data)
            if(obj.hasOwnProperty("users")){
                let users = obj["users"]
                let flag = false
                for(let i=0;i<users.length;i++){
                    let item = users[i]
                    if (item["uname"]==user_info["uname"]){
                        //找到用户
                        // cb(null,true)
                        flag = true
                        break
                    }
                }
                // if(flag){
                //     cb(null,true)
                // }else{
                //     cb(null,false)
                // }
                cb(null,flag)
            }else{
                cb(null,false)
            }
            
            // cb(null,JSON.parse(data))
        }else{
            cb(null,null)
        }
    })
}

//添加用户
function oauth_add(user,cb){
    fop.fwrite("sources/users.json",user,(err,msg)=>{
        if(err){
            cb(err,null)
        }
        // 给用户创建目录
        fop.fmkdir("sources/users/"+user.dirname,(err2,msg2)=>{
            if(err2){
                cb(false,msg)
                throw msg2
            }
            cb(null,msg2)
        })
        // cb(null,msg)
    })
}


//登录密码验证
function oauth_match(user_info,cb){
    fop.fread('sources/users.json',function (err,data){
        //对data进行匹配 user_info
        if(err){
            cb(err,null)
        }
        if((typeof JSON.parse(data))==(typeof JSON.parse("{}"))){
            //将数据进行过滤
            let obj = JSON.parse(data)
            if(obj.hasOwnProperty("users")){
                let users = obj["users"]
                let flag = false
                for(let i=0;i<users.length;i++){
                    let item = users[i]
                    if (item["uname"]==user_info["uname"] && item["upwd"]==user_info["upwd"]){
                        //找到用户 匹配密码
                        // cb(null,true)
                        flag = true
                        break
                    }
                }
                // if(flag){
                //     cb(null,true)
                // }else{
                //     cb(null,false)
                // }
                cb(null,flag)
            }else{
                cb(null,false)
            }
            
            // cb(null,JSON.parse(data))
        }else{
            cb(null,null)
        }
    })
}

// 查找用户列表
function get_user_files(user,cb){
    fop.rfiles("sources/users/"+user.userpath,(err,files)=>{
        if(err){
            cb(true,null)
        }
        cb(null,files)
    })
}




module.exports = {
    oauth : oauth_user,
    add : oauth_add,
    match : oauth_match,
    files:get_user_files,

}



                        