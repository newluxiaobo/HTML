/**
 * ES6
 * ECMAScript6 是JavaScript语言的一代标准
 * 它是在2015年6月正式发布
 * 现在已经到了ES9(ES6~ES9) (ES5,ES6,ES7)
 * ECMAScript 和 JavaScript 是什么关系
 * ECMAScript 是 JavaScript 的语言标准和规范
 * JavaScript 是 ECMAScript 的实现
 * 
 */

 // 1. 标量和字符串
 var a_value = "hello"  //全局变量

 if(true){
     var b_value = "world"
 }

 console.log(a_value);
 console.log(b_value);
 

 //为了能解决JS的变量被提升的问题,也要解决全局和局部的概念,
 // ES6 引入了新的变量声明方式  1. let  2. const

 // let 局部变量

 // 对于编程语言来说, { }表示作用域

 if (true){
     var c_value = 123
     let d_value = 256
 }

//  console.log(d_value);

// console.log(e_value);
 let e_value = 392

 console.log(e_value);
 

 //  笔试题
 function func(){
     var aaa = 18
     var bbb = 20 
     if (true){
         let aaa = 18
         var bbb = 200
     }
     console.log(aaa);
     console.log(bbb);
 }
 func();
 


 // 场景一: 见 index.html  (for循环 let i)


 let a = 1
//  let a = 2
a = 2
 console.log(a);

 // let 声明的变量不能被重复定义/声明

 //const 声明的是常量 一旦声明,值将不会变
 const PI = 3.1415926
//  PI = 3.14
//  const 也是有作用域之说  和 let 一样有作用域,一样也不能重复声明

if (true){
    const ab = "abc";
}


// 2. string 字符串

// ES5 string
let a_string = "hello world"
// indexOf
let index = a_string.indexOf("world",7)
console.log(index); // -1 表示没找到

//
console.log(a_string.split());

