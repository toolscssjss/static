//ad
function block(i) {
    document.write('<div style="clear:both;padding:0;margin:0;height:' + i + 'px;"></div>')
}

/*-----   reset union   -----*/
var union = {
    index: {},
    channel: {},
    list: {},
    arc: {},
    news: {},
    m: {},
    v: {},
    pic: {},
    zt: {},
    all: {}
};

/*移动端顶部banner*/
union.m.banner = function(){
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/lxdy9hugi1.js\"></script>");


}

/*移动端图+*/
union.m.tujia = function(){
	
	// var st="<a title=\"分享到\" class=\"bds_t\" href=\"#\">分享到:</a>";
	// $('.bds_tsina').before(st);

}

/*移动端信息流*/
union.m.list_xxl = function(){
	
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/wrjxjqanguyxagjn.js\"></script>");

}

/*移动文章下面 分享上面*/
union.m.ab_st = function(){
	// document.writeln("	  <div style=\"padding:10px 0px; overflow:hidden;max-width:100%;text-indent:0em;\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/t3ds8gju36.js\"></script>");
	// document.writeln("	  </div>");
	
	// document.writeln("	  <div style=\"padding:10px 0px; overflow:hidden;text-indent:0em;\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/tudp2779hm.js\"></script>");
	// document.writeln("	  </div>");
}
/*相关新闻上面*/
union.m.anews_t = function(){
	// document.writeln("	  <div style=\"padding:10px 0px; overflow:hidden;\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/bwofctfsezdec.js\"></script>");
	// document.writeln("	  </div>");
	
	// document.writeln("<div style=\"padding:10px 0px; overflow:hidden;background-color: #fff;\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/uphyvmyoyswrxv.js\"></script>");
	// document.writeln("</div>");
	
	
	// var Cts = $('body').html();
	// var title_r=$('title').html();
	// t='';
	// for(var i=0;i<100;i++){

		// if(Cts.indexOf("amp;") > 0 ){
		  // Cts=Cts.replace('amp;','');
		  // title_r=title_r.replace('amp;','');
		// } 
		// if(title_r.indexOf("amp;") > 0 ){
		  // title_r=title_r.replace('amp;','');
		// } 
		
	// }
	// $('body').html(Cts);
	
	
	// $('title').html(title_r);
	document.writeln("<div id='ad_1' style=\"display:none\">");
	// document.writeln("<script type=\'text/javascript\' src=\'http://bdjs.ylq.com/ytlczbczuwai.js\'></script>");
	document.writeln("</div>");
	
	document.writeln("<div id='ad_2' style=\"display:none\">");
	
	document.writeln("</div>");
	
	document.writeln("<div id='ad_3' style=\"display:none\">");
	
	document.writeln("</div>");
	// $(document).ready(function() {
	// var ad_1=$('#ad_1').html();
	// var ad_2=$('#ad_2').html();
	// var ad_3=$('#ad_3').html();
	
	// $('.n_wrap figure:eq(0)').after(' <figure>'+ad_1+'</figure>');
	// $('.n_wrap figure:eq(2)').after(' <figure>'+ad_2+'</figure>');
	

	// });
	
	
	
	
}

/*移动端文章页猜你喜欢（原生）*/
union.m.article_like = function(){
	// document.writeln("<div id='ad' style=\"display:none;\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/uphvhoylvswrxv.js\"></script>");
	// document.writeln("</div>");
	// $(document).ready(function() {
		
	// var adhtml=$('#ad').html();
	// $('.in_wrap figure:eq(0)').before('<figure>'+adhtml+'</figure>');
	// });

}

/*移动端底部悬浮*/
union.m.suspension = function(){

	
}
union.m.talkadtop =function(){
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/ytlczbccswai.js\"></script>");
}


union.m.banner02 = function(){
	var title = $('.wrap:eq(0) h2:eq(0)').html();

	if(title!='相关新闻'){
	document.writeln("	  <div style=\"padding:10px 0px; overflow:hidden;\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/bwofctfsezdec.js\"></script>");
	document.writeln("	  </div>");
	
	document.writeln("<div style=\"padding:10px 0px; overflow:hidden;background-color: #fff;\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/uphyvmyoyswrxv.js\"></script>");
	document.writeln("</div>");
	
	
	// var Cts = $('body').html();
	// var title_r=$('title').html();
	// t='';
	// for(var i=0;i<100;i++){

		// if(Cts.indexOf("amp;") > 0 ){
		  // Cts=Cts.replace('amp;','');
		  // title_r=title_r.replace('amp;','');
		// } 
		// if(title_r.indexOf("amp;") > 0 ){
		  // title_r=title_r.replace('amp;','');
		// } 
		
	// }
	// $('body').html(Cts);
	
	
	// $('title').html(title_r);
	document.writeln("<div id='ad_1' style=\"display:none\">");
		// document.writeln("<script type=\'text/javascript\' src=\'http://bdjs.ylq.com/ytlczbczuwai.js\'></script>");
	document.writeln("</div>");
	document.writeln("<div id='ad_2' style=\"display:none\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/cxpgdugzwaedgm.js\"></script>");
	document.writeln("</div>");
	document.writeln("<div id='ad_3' style=\"display:none\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://bdjs.ylq.com/cxpgdugzwaedgm.js\"></script>");
	document.writeln("</div>");
	// $(document).ready(function() {
	// var ad_1=$('#ad_1').html();
	// var ad_2=$('#ad_2').html();
	var ad_3=$('#ad_3').html();
	
	// $('.n_wrap figure:eq(0)').after(' <figure>'+ad_1+'</figure>');
	// $('.n_wrap figure:eq(2)').after(' <figure>'+ad_2+'</figure>');
	// });
	}
	//悬浮代码
	document.writeln("<div id='ad_3' style=\"z-index:99999\">");
	// document.writeln("<script type=\"text/javascript\" src=\"http://img1.99.com.cn/js/smjktg.js\"></script>");
	document.writeln("</div>");
	
	$(document).ready(function() {
		
	// $('.down').attr('style','z-index:9999');
	});
	
	//显示全文
	$(document).ready(function() {
	var height = $('#article_content').height();
	if(height>1000){
	height=height * 0.5;
	$('#article_content').attr('style','height:'+height+'px;overflow:hidden');
	$('.bdshare').attr('style','display:none;');
	$('.focus_wx').attr('style','display:none;');
	
	$('#article_content').after('<div class="wrap n_wrap in_wrap"><div onclick="article_all();" style="text-indent: 0em;" class="load_btn">加载更多<i></i></div></div>');
	
	
	}
	});
	

	
	
}

function article_all(){
		$('#article_content').attr('style','height:auto;');
		$('.in_wrap').attr('style','display:none');
		$('.bdshare').attr('style','');
		$('.focus_wx').attr('style','');
		
	}