$(document).ready(function(){
    function jumpBaidu(){
            //myWindow = window.open ('','newwindow','width='+(window.screen.availWidth-10)+',height='+(window.screen.availHeight-30)+ ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no')
         myWindow=window.open('','','width=900,height=700', "fullscreen=yes")
         var iframe = document.createElement('iframe');
         iframe.src="https://www.baidu.com";
         iframe.style.width = "100%";
         iframe.style.height = "100%";
         iframe.style.border = "none";
         myWindow.document.getElementsByTagName('body')[0].appendChild(iframe);
    }



    //const urlStr=window.location.href;
    //const urlID = urlStr.split('/').pop().replace(/[^0-9]/ig,"");
    //console.log(urlID)
    // const pcORmouble = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? 'mb' : 'pc'
    // console.log(pcORmouble)
    // $.ajax({
    //     url: 'http://testv2.com/api/promotion/191614/?model='+pcORmouble,
    //     async:false,
    //     success:function(a){
    //         console.log(a)
    //         if(a.data.is_jump == true){
    //             window.location.href = a.data.jump_url
    //         }else{
    //             console.log("jump === false")
    //         }
    //
    //     }
    // })


    var imageStr1 = `<h3>图片</h3><a href="https://www.baidu.com"><img style="width: 1000px;height:500px;" class='picav' src="http://n.sinaimg.cn/sinacn20190822s/665/w400h265/20190822/4dd1-icqznfz6931591.png" alt=""></a>`;
    var iifram = `<h3>ifram</h3>
    <div>
        <iframe style="width: 100%;height:500px;" src="https://www.baidu.com" frameborder="0"></iframe>
    </div>`;

    var leftQstr = `<div class='leftqstr' style='width: 160px;
background: linear-gradient(0deg, #ff740e, #ff3d33);
margin-right: 0px;
padding: 0px;
height: 296px;
box-shadow: 0px 20px 60px 0px rgba(255, 91, 51, 0.5);
margin-top: -40px;position: fixed;
top: 50%;
right: 20px;
margin: -100px 0 0 0;
z-index: 10;'>
<div class='left_jump'>
<p style='font-size: 16px;margin-top: 10px;font-weight: bold;text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);color: #fff;text-align:center'>在线客服<p>
<p style='font-size: 16px;margin-top: 10px;font-weight: bold;text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);color: #fff;text-align:center'>VIP咨询<p>
<p style='font-size: 16px;margin-top: 10px;font-weight: bold;text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);color: #fff;text-align:center'>广告暂未<p>
<p style='font-size: 16px;margin-top: 10px;font-weight: bold;text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);color: #fff;text-align:center'>广告暂未<p>
</div>
<div class='leftstrclose' style="width:80%;height:60px;position:absolute;bottom:0;left:10%;border-top:1px solid rgba(255, 255, 255, 0.2);text-align:center;line-height:60px;color: #fff;font-size:12px">[关闭]</div>

</div>`
var rightQstr = `<div class='rightqstr' style='width: 160px;
background: linear-gradient(0deg, #ff740e, #ff3d33);
margin-right: 0px;
padding: 0px;
height: 296px;
box-shadow: 0px 20px 60px 0px rgba(255, 91, 51, 0.5);
margin-top: -40px;position: fixed;
top: 50%;
left: 20px;
margin: -100px 0 0 0;
z-index: 10;'>
<div class='right_jump'>
<p style='font-size: 16px;margin-top: 10px;font-weight: bold;text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);color: #fff;text-align:center'>在线客服<p>
<p style='font-size: 16px;margin-top: 10px;font-weight: bold;text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);color: #fff;text-align:center'>VIP咨询<p>
<p style='font-size: 16px;margin-top: 10px;font-weight: bold;text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);color: #fff;text-align:center'>广告暂未<p>
<p style='font-size: 16px;margin-top: 10px;font-weight: bold;text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);color: #fff;text-align:center'>广告暂未<p>
</div>
<div class='rightstrclose' style="width:80%;height:60px;position:absolute;bottom:0;left:10%;border-top:1px solid rgba(255, 255, 255, 0.2);text-align:center;line-height:60px;color: #fff;font-size:12px">[关闭]</div>

</div>`

var dSttr = `<div id="div2" style="position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;z-index:100;
    z-index: 15;width:100%;height:80px;display:none;background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567241415671&di=cc54c796bf41eddd907f30456353fb43&imgtype=0&src=http%3A%2F%2Fs16.sinaimg.cn%2Fbmiddle%2F5038050b4496a409386af) no-repeat 50%;">
    <p style="font-size: 24px;color:white;text-align:center;line-height:80px;">
        广告
    </p>    
</div>`
    var dStr = $(`<div class='bigout' style="position: fixed;left: 0;right: 0;top: 0;bottom: 0;background: rgba(0,0,0,.5);
                z-index: 99;"></div>
    <div class='alertavv' style="margin: auto;z-index: 100;width: 1140px;height: 665px;
        background: url(https://img.alicdn.com/tfs/TB1VNPQckxz61VjSZFrXXXeLFXa-2282-1330.png) no-repeat 50%;
        background-size: 100% 100%;position: fixed;left: 0;right: 0;top: 0;bottom: 0;">
    <div class='closeav1' style="width: 30px;line-height: 13px;font-size: 10px;text-align: center;background: rgba(256, 256, 256, .7);position: absolute;top: 0;right: 0;cursor:pointer;">关闭</div>
    </div>`)
$('body').append(leftQstr);
$('body').append(rightQstr);
$('body').prepend(dSttr);
$('body').append(dStr);
$('.alertavv').on('click','.closeav1',function(){
$("#div2").fadeIn("slow");
$(".bigout").css({'display':"none"});
$(".alertavv").css({'display':"none"});
return false;
})
$('body').on('click','.leftstrclose',function(){
$(".leftqstr").css({'display':"none"});
})
$('body').on('click','.rightstrclose',function(){
$(".rightqstr").css({'display':"none"});
})
//跳转广告
$('body').on('click','#div2',function(){
jumpBaidu()
})
$('body').on('click','.alertavv',function(){
jumpBaidu()
})
$('body').on('click','.left_jump',function(){
jumpBaidu()
})
$('body').on('click','.right_jump',function(){
jumpBaidu()
})
})
