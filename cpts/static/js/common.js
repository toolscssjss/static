function uaredirect(murl) {
            try {
              if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
                  location.replace(murl + "#src_web");
              }
            } catch(err) {}
        }


(function(){
    var bp = document.createElement('script');
    bp.src = '//push.zhanzhang.baidu.com/push.js';
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

// function share_show(){
// 	document.write('<div class="bdsharebuttonbox"><span class="share">分享到：</span><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_more" data-cmd="more"></a></div>');
// 	document.write('<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>');
// }

$(document).ready(function(){
	var $rank_li = $('.vMain .v_wrapper .rank_type ul.rankNav li');
	　$rank_li.hover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $rank_li.index(this);
		$('.vMain .v_wrapper .rank_type .rankBox > ul.movie_rank').eq(index).show().siblings().hide();
  	});
  });

 $(document).ready(function(){
	 $('.vMain .m_wrapper .v_box').each(function(i,d){
			$(d).find('ul').eq(0).removeClass('hide');
	 })
	　$('.vMain .m_wrapper h2 ul').find('li').mousemove(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var idx = $(this).index();
		var nextId = $(this).parents('h2').next('.v_box');
		nextId.find('ul').addClass('hide');
		nextId.find('ul').eq(idx).removeClass('hide');
	});
});
