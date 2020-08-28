/*首页文章加载*/
$(document).ready(function(e) {
	$(".news_wrap figure:gt(4)").hide();
    $(".news_wrap .load_btn").click(function(){
		$(".news_wrap figure:gt(4)").show();
		$(this).hide();
		$(".news_wrap .more_btn").css({"display":"block"});
		});
});

/*首页明星加载*/
$(document).ready(function(e) {
	$(".stars_wrap figure:gt(8)").hide();
    $(".stars_wrap .load_btn").click(function(){
		$(".stars_wrap figure:gt(8)").show();
		$(this).hide();
		$(".stars_wrap .more_btn").css({"display":"block"});
		});
});

/*首页影视加载*/
$(document).ready(function(e) {
	$(".video_wrap .v_list ul li:gt(5)").hide();
    $(".video_wrap .load_btn").click(function(){
		$(".video_wrap .v_list ul li:gt(5)").show();
		$(this).hide();
		$(".video_wrap .more_btn").css({"display":"block"});
		});
});
/*首页图库加载*/
$(document).ready(function(e) {
	$(".pic_wrap .p_list ul li:gt(2)").hide();
    $(".pic_wrap .load_btn").click(function(){
		$(".pic_wrap .p_list ul li:gt(2)").show();
		$(this).hide();
		$(".pic_wrap .more_btn").css({"display":"block"});
		});
});