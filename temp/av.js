$(document).ready(function () {

    //图片报错 执行
    function showDefaultImg(img, adress) {
        img.onerror = null;
        if (adress == 'left') {
            $(".left_av").css({
                'display': "none"
            });
        } else {
            $(".right_av").css({
                'display': "none"
            });
        }


    }
    function jumpBaidu() {
        //myWindow = window.open ('','newwindow','width='+(window.screen.availWidth-10)+',height='+(window.screen.availHeight-30)+ ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no')
        myWindow = window.open('', '', 'width=900,height=700', "fullscreen=yes")
        var iframe = document.createElement('iframe');
        iframe.src = "https://www.baidu.com";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        myWindow.document.getElementsByTagName('body')[0].appendChild(iframe);
    }



    //const urlStr = window.location.href;
    //const urlID = urlStr.split('/').pop().replace(/[^0-9]/ig, "");
    
    //判断pc / mb
    const pcORmouble = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? 'mb' : 'pc'



    //底部广告
    
    if (pcORmouble == 'pc') {
        $(".alertavv_pc_center").css({
            'display': "block"
        });
        $('.alertavv_pc_center').on('click', '.closeav1', function () {
            $(".bottom_av").fadeIn("slow");
            $(".bigout").css({
                'display': "none"
            });
            $(".alertavv_pc_center").css({
                'display': "none"
            });
            return false;
        })
        $('body').on('click', '.left_avclose', function () {
            $(".left_av").css({
                'display': "none"
            });
        })
        $('body').on('click', '.right_avclose', function () {
            $(".right_av").css({
                'display': "none"
            });
        })
    } else {
        $(".left_av").css({
            'display': "none"
        });
        $(".right_av").css({
            'display': "none"
        });
        $(".bottom_avmb").css({
            'display': "block"
        });
        $(".bigout").css({
            'display': "block"
        });
        $(".alertavmb").css({
            'display': "block"
        });
        
        $('.alertavmb').on('click', '.closeav1_mb', function () {
            $(".bottom_avmb").fadeIn("slow");
            $(".bigout").css({
                'display': "none"
            });
            $(".alertavmb").css({
                'display': "none"
            });
            return false;
        })
        $('body').on('click', '.bottom_avmb_close', function () {
            $(".bottom_avmb").css({
                'display': "none"
            });
        })
    }


})