// 查找指定字符串中出现最多的字母并统计出现的次数
// "abcaandccaaaaaaaa" 

function myFind(newString){
    // n  去重复后的字符
    var n = ""
    //  k 记录出现的次数
    var k = 0
    //  obj 次数的集合
    var obj = ""
    //  max 记录最大的次数 数字
    var max = ""
    
    for(let i = 0;i<newString.length;i++){
        if(i == newString.indexOf(newString[i])){
            n = n + newString[i]
        }
    }
    for(let j = 0;j<n.length;j++){
        console.log("字符类型有:" + n[j]);
        value = n[j]
        Count(newString,n[j])


        function Count(newString,value){
            var k = 0
            for(let i = 0;i<newString.length;i++){
                if (value == newString[i]){
                    k++
                }else{
                    k = k
                }
            }
            console.log("字符出现的次数:" + k);
            obj = obj + k
        }
    }


    for(let i = 0;i<obj.length;i++){
        max = obj[0]
        var cur = obj[i]
        cur > max?max = cur : null
    }
    
    var maxnumber = n[obj.indexOf(max)]
    console.log("******************");
    console.log("出现最多的字符:" + maxnumber);
    console.log("出现次数:" + max);
}



var de_string = "   asdasd     "
myFind(de_string);







// function myFind(string,value){
//     var k = 0
//     for(let i = 0;i<string.length;i++){
//         if (value == de_string[i]){
//             // console.log(de_string[i]);
//             k++
//         }else{
//             k = k
//         }
//     }
//     console.log(k);
// }