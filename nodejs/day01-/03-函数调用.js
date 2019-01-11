//本页的函数调用
// 声明一个函数
function sum(a,b){
    return a+b
}

var ret = sum(1,1)
console.log(ret)


//调用文件外的js文件
//require()  引入/导入一个模块  js文件


var sayHi2 = require("./index.js");
sayHi2("he")

var says = require("./index01")
// says.sbb("kkkkk")
// says.shh("23123123")

says.sayBye("111")
says.sayHello("21231")