/**express 处理 POST 请求 
 * 
 * GET 和 POST 的区别之一: 参数
 * GET 的参数 实在 URL 中 url?key1=value1&key2=value2
 * POST 的参数 也可以放在 URL中 这种情况是主动放在url中,用法和GET一样
 * 一般情况下,POST的参数是放在请求报文中 请求体中  保护参数安全(相对)
 * 
 * 
 * 
*/
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()


// body-parser 用于解析POST参数列表
// 他也是一个第三方的模块  也叫中间件
// cnpm i body-parser --save

// 通过use 来使用body-parser 进行POST参数解析
/**一共有四种解析方式
 * 常用的两种:
 * 第一种: urlencoded() 专门用来解析form表单类型的请求参数
 * extended:true/false
 * true表示解析的结果中键值对的值可以是任何类型
 * false表示值只能是一个string,或是一个数组
 * 
 * 第二种:bodyParser.json() 
 * 请求的参数中的值可以是一个json字符串
 */

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))


app.post("/login",(req,res)=>{
    console.log("1",req.query);
    console.log("2",req.body);
    
    res.send("OK")
})

app.listen(8888)