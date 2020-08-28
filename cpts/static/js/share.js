	//全局变量，动态的文章URL
    var ShareUrl = "";
    var ShareText = "";
    var url;
    //绑定所有分享按钮所在A标签的鼠标移入事件，从而获取动态URL
    $(function () {
        $(".bdsharebuttonbox a").mouseover(function () {
            ShareUrl = $(this).attr("data-url");
            ShareText = $(this).parents().siblings("h3").html();
        });
    });

    /*ajax出来的数据添加一个点击事件来获取当前的URL值*/
    function getUrl(url){
    	ShareUrl = url;
    }

    /*
    * 动态设置百度分享URL的函数,具体参数
    * cmd为分享目标id,此id指的是插件中分析按钮
    *，我们自己的文章ID要通过全局变量获取
    * config为当前设置，返回值为更新后的设置。
    */
    function SetShareUrl(cmd, config) {
        if (ShareUrl) {
            config.bdUrl = ShareUrl;
            config.bdText = ShareText;
        }
        return config;
    }

    //插件的配置部分，注意要记得设置onBeforeClick事件，主要用于获取动态url
    window._bd_share_config = {
        "common": {
            onBeforeClick: SetShareUrl, "bdSnsKey": {}, "bdText": ""
            , "bdMini": "2", "bdMiniList": false, "bdPic": "", "bdStyle": "0", "bdSize": "24"
        }, "share": {}
    };
    //插件的JS加载部分
    // with (document) 0[(getElementsByTagName('head')[0] || body)
    //     .appendChild(createElement('script'))
    //     .src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='
    //     + ~(-new Date() / 36e5)];
