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
// indexOf 返回第一次出现指定字符串的下标  找不到返回-1
let index = a_string.indexOf("world",7)  // 7 表示从第几个开始找
console.log(index); // -1 表示没找到
// 查找指定字符串中出现最多的字母并统计出现的次数
// "abcaandccaaaaaaaa"   



//
let rets = a_string.split(" ")
console.log(a_string);
console.log(rets);


// ES6 中对String方法进行扩展
// startsWith(字符串,开始位置)  返回布尔值,表示参数字符串是否在源字符串的指定位置开始位置,默认是从头开始
console.log(a_string.startsWith("world",1));
//endsWith()
//includes() 返回布尔值, 源字符串是否包含指定字符串
console.log(a_string.includes("or"));

// repeat(n) 指定字符串 重复 n次
let b_string = "aaabbbccc"
console.log(b_string.repeat(3));

// 模板字符串
let firstName = "Tom"
let LastName = "Ads"

let totleName = `hello ${firstName} ${LastName}`
console.log(totleName);

var q_string = 2
var t_string = 1
let tt = `sum:${q_string>t_string?true:false} ${firstName+LastName}`

console.log(tt);




let lines_string = `
            1
                2
                    3
                4
            5
        6
`

console.log(lines_string);


// 3. 数组
// 扩展运算符  ...
console.log([1,2,3,4]);

console.log(...[1,2,3,4]);


//实现将一个数组添加到另外一个数组
function my_push(array,items){
    array.push(...items)
}

let b_array = [1,2,3,4]
let c_array = [3,2,1,2]
my_push(b_array,c_array);
console.log(b_array);


function add(a,b,c,d){
    return a+b+c+d
}

let args = [1,2,3,4]
console.log(add(...args));

let d_array = [1,2,3,4,5,6]
d_array.forEach(function(value,index){
    console.log(index,value);
})

// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }
console.log("*********************");

for (let item in c_array){
    console.log(item,c_array[item]);
    
}

console.log("*********************");

let obj = new Object();
obj.name = "Tom"
obj.age = 18
for (const key in obj){
    console.log(key);
    if(obj.hasOwnProperty("sex")){
        console.log(true);
    }else{
        console.log(false);
    }
}
console.log("111111*********************11111");
// ES6 对数组扩展了3分方法
// keys() 键名遍历
// values() 键值遍历
// entries() 键值对遍历

for(let index of ["a","b"].keys()){
    console.log(index);
}
for(let index of ["a","b"].values()){
    console.log(index);
}
for(let [index,value] of ["a","b"].entries()){
    console.log(index,value);
}

console.log("111111*********************11111");
// 函数
// ES6 改进函数的表达
// ES5 的函数表达
function func_name(){
    //函数体
}

//ES6的箭头函数

var a_func = (()=>{
    return "hehe"
})()
//( ()=>{}) () )


d_array.forEach(function(value,index){
    console.log(index,value);
})

d_array.forEach((value,index)=>{
    console.log(this);
    
    console.log(index,value);
    
})
