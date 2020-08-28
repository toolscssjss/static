/*头部*/
$(document).ready(function(e) {
    $(".search_btn").click(function(){
		$(".searchBox").siblings().css("display","none");
		$(".searchBox").removeClass("hide");
		$(".nav_content").css({"display":"none"})
		$(".black_overlay").show();

	});
	$(".navigation").click(function(){
		$(".nav_content").slideToggle();
		$(".nav_content").css('overflow','inherit')
		$(".black_overlay").fadeToggle("hide");
		$("body,html").toggleClass("hidden");
	});
	$(".c_btn").click(function(){
		$(".searchBox").siblings().removeClass("hide");
		$(".searchBox").addClass("hide");
		$(".black_overlay").hide();
	});
});
/*导航条*/ 
$(document).ready(function(e) {
		$('.nav ul li:gt(6)').hide();
		$('.nav ul li.tMore').click(function(){
			$('.nav ul li:gt(6)').slideToggle();
			$('.nav ul li.tMore i').toggleClass('am_down');
			})
});

/*二级导航条隐藏最后一个竖线*/ 
$(document).ready(function(e) {
   $('.subNav .swiper-container .swiper-wrapper .swiper-slide:last i').remove();
});