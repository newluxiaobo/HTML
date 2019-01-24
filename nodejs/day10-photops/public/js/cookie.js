// 程序 是无法 删除掉一个cookie 的 key 和value
    // 只能设置key 的无效才能让key 起到删除作用
    // cookie 长度有效 4KB
    // cookie get 请求的时候会被带上  所以需要设置


function setCookie(cname,cvalue,exdays){
    let date = new Date()
    date.setTime(date.getTime()+(exdays*24*60*60*1000));
    //设置cookie的时效
    let expires = "expires="+date.toGMTString();
    document.cookie = cname+"="+cvalue+";"+expires
}



function getCookie(cname){
    let ca = document.cookie.split(";")
    for(let i=0;i<ca.length;i++){
        let item = ca[i].trim()
        let items = item.split("=")
        if(items[0]==cname){
            return items[1]
        }
    }
    return ""
}


function delCookie(key) {
    var date = new Date();
    date.setTime(date.getTime() - 1);
    var delValue = getCookie(key);
    if (!!delValue) {
        document.cookie = key+'='+delValue+';expires='+date.toGMTString();
    }
}


// function delCookie(key){
//     setCookie(key,"",0)
// }