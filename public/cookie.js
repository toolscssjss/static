
function setCookie(key,value){
    var oDate=new Date();
    document.cookie=key+"="+value+";path=/;domain=";
}
function bigClose() {
    setCookie("close", "1")
}