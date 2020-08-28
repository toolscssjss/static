var _imgArray = new Array();
$(document).ready(function(){
/*scroll*/
	if($("#maincontent").size() > 0){
		var scrollDistance = 528;
	} else{
		var scrollDistance = 0;
	}
	$("#navcontainer").css("width", "100%");
	$("#navcontainer").append($("#siteHeader").clone());
	$("#navcontainer").append($("#siteNavigation").clone());
	
	var IE6browser = (navigator.userAgent.indexOf("MSIE 6")>=0) ? true : false;
	
	if(!IE6browser){
		var _visiflag;
		setInterval(function(){
			if(scrollDistance < ___getPageScroll()[1]){
				if(!_visiflag){
					_visiflag = true;
					$("#navcontainer").show();
				}
			}else{
				if(_visiflag){
					_visiflag = false;
					$("#navcontainer").hide();
				}
			}
		},33);
		
		
		if(scrollDistance < ___getPageScroll()[1]){
			_visiflag = true;
			$("#navcontainer").show();
		}else{
			_visiflag = false;
			$("#navcontainer").hide();
		}
	}
	$("#maincontent .left,#maincontent .right").VogueRollOver();
	
	
	var _preNum = 0;
	$("#slide1").find(".slideinner").find("a").mouseover(function(){
		if(_preNum != ($("#slide1").find(".slideinner").find("a").index(this))){
			$("#special_mainimg").find("img").eq(_preNum).fadeOut();
			_preNum = ($("#slide1").find(".slideinner").find("a").index(this));
			$("#special_mainimg").find("img").eq(_preNum).fadeIn();
		}
	})
	
	if($("#maincontent").size()){
		funcmaincontent();
	};
    
    var lengpict,val;
    lengpict = $("#maincontent .pict").size();
	for(i=0; i<lengpict; i++){
	   $(".slider").children(".navBottom").children("ul").append("<li>"+i+"</li>");
	}
    
    $(".navBottom ul li").click(function(){
            $(this).addClass("on").siblings("li").removeClass("on");
	       _maxpage = 4;
           _currentpage = $(this).html();
           //$("#maincontent").stop().find(".pict").eq(num).addClass("main").css({"position":"absolute"});
           for(var i = 0 ; i < _maxpage ; i++){
			var _pos = Math.round(1030*(i-_currentpage)+$(window).width()/2-515);
			var _opa = 0.2;
			if(i == _currentpage)_opa = 1;
			if(_pos < -1030){
				_pos += _maxpage*1030
			}else if(_pos > $(window).width()+1030){
				_pos -= _maxpage*1030
			}
			$("#maincontent").find(".pict").eq(i)
			.stop()
			.css({
				left:_pos-1030
			})
			.animate({
				left:_pos,
				opacity:_opa
			},{
				duration:700 ,
				easing:'easeOutQuint'
			})
		  }
          nextPage.stop();
	})
	
	$(".pict").hover(function(){
		$(this).addClass("jhover");
	},function(){
		$(this).removeClass("jhover");
	})
	.css("cursor","pointer")
	.click(function(){
	if($(this).find("a").eq(0).attr("href")){
      if($(this).find("a").eq(0).attr("target") == "_blank"){
			  window.open($(this).find("a").eq(0).attr("href"));
      }else{
			  location.href = $(this).find("a").eq(0).attr("href");
      }
		}
		return false;
	})
});

/*---------------
slide FUNCTION
---------------*/

function funcslide(_slide){
	
	var _slideCount = 0;
	var _slideMax = Math.ceil(_slide.find(".slidecontent").find(".element").length/3);
	var _slideLength = _slide.find(".slidecontent").find(".element").length;
	var _slideHeight = 0;

	if(_slide.find(".element").length > 3){
		var _str = '<div class="slidenavigate"><a href="#" class="prev nouse">PREV</a>';
		for(var i = 0 ; i < _slideMax ;i++){
			_str += '<a href="#" class="num">'+Number(i+1)+'</a>';
		}
		_str += '<a href="#" class="next">NEXT</a></div>'
		_slide.prepend(_str)
	} else{
		_slide.find(".slidecontent").css("padding-top", "20px");
	}
	
	_slide.find(".slidecontent").find(".element").css("width","165px").flatHeights();
	_slideHeight = (parseInt(_slide.find(".slidecontent").find(".element:first-child").outerHeight())+5)+"px";
	_slide.find(".slidecontent").css({height:_slideHeight,overflow:"hidden"})
	_slide.find(".slideinner").css({width:_slideLength*185})
	
	_slide.find(".slidenavigate").css({visibility:"visible"})
	_slide.find(".slideinner").css({position:"absolute",left:"0px"})
	
	_slide.find(".slidenavigate").find("a.prev").click(function(){
		if(_slideCount != 0){
			_slideCount--;
			var _left = -637*_slideCount;
			_slide.find(".slideinner").animate({left:_left + "px"	})
			_slide.find(".slidenavigate").find(".current").removeClass("current");
			_slide.find(".slidenavigate").find("a.num").eq(_slideCount).addClass("current");
			_slide.find(".slidenavigate").find(".nouse").removeClass("nouse");
			if(_slideCount == 0)_slide.find(".slidenavigate").find("a.prev").addClass("nouse");
		}
		return false;
	})
	
	_slide.find(".slidenavigate").find("a.next").click(function(){
		if(_slideCount != _slideMax-1){
			_slideCount++;
			var _left = -637*_slideCount;
			_slide.find(".slideinner").animate({left:_left + "px"	})
			_slide.find(".slidenavigate").find(".current").removeClass("current");
			_slide.find(".slidenavigate").find("a.num").eq(_slideCount).addClass("current");
			_slide.find(".slidenavigate").find(".nouse").removeClass("nouse");
			if(_slideCount == _slideMax-1)_slide.find(".slidenavigate").find("a.next").addClass("nouse");
		}
		return false;
	})
	
	for(i = 0 ; i < _slideMax; i++){
		_slide.find(".slidenavigate").find("a.num").eq(i)
		.click(function(){
			if(_slideCount != $(this).index()-1){
				_slideCount = $(this).index()-1;
				var _left = -637*_slideCount;
				_slide.find(".slideinner").animate({left:_left + "px"	})
				_slide.find(".slidenavigate").find(".current").removeClass("current");
				_slide.find(".slidenavigate").find("a.num").eq(_slideCount).addClass("current");
				_slide.find(".slidenavigate").find(".nouse").removeClass("nouse");
				if(_slideCount == 0)_slide.find(".slidenavigate").find("a.prev").addClass("nouse");
				if(_slideCount == _slideMax-1)_slide.find(".slidenavigate").find("a.next").addClass("nouse");
			}
			return false;
		})
	}
	_slide.find(".slidenavigate").find("a.num").eq(_slideCount).addClass("current");
	
}

/*--------------
bnrFUNCTION
--------------*/

function funcbnr(_bnrcontent){
	var _bnrCount = 0;
	var _bnrMax = _bnrcontent.find(".pict").length;
	var _bnrHeight = 0;
	
	if(_bnrMax > 1){
		_bnrcontent.find(".left,.right").css("display","block");
	}
	_bnrcontent.find(".pict").flatHeights();
	_bnrcontent.find(".pict");
	_bnrHeight = (parseInt(_bnrcontent.find(".pict:first-child").outerHeight())+5)+"px";
	_bnrcontent.css("height",_bnrHeight);

	_bnrcontent.find(".left").click(function(){
		if(_bnrCount !=  0){
			_bnrcontent.find(".pict").eq(_bnrCount).fadeOut(400,"linear");
			_bnrCount--;
			if(_bnrCount ==  0){
				 var str = _bnrcontent.find(".left").find("img").attr("src");
				 if(str.indexOf("_nouse")==-1){
					str = str.replace("_on.gif",".gif");
					str = str.replace("_on.jpg",".jpg");
					str = str.replace(".gif","_nouse.gif");
					str = str.replace(".jpg","_nouse.jpg");
					_bnrcontent.find(".left").find("img").attr("src",str);
				 }
			}
			 var str = _bnrcontent.find(".right").find("img").attr("src");
			 if(str.indexOf("_nouse")!=-1){
				str = str.replace("_nouse.gif",".gif");
				str = str.replace("_nouse.jpg",".jpg");
				_bnrcontent.find(".right").find("img").attr("src",str);
			 }
			
			_bnrcontent.find(".pict").eq(_bnrCount).fadeIn(400,"linear");
		}
	})
	_bnrcontent.find(".right").click(function(){
		if(_bnrCount !=  _bnrMax-1){
			_bnrcontent.find(".pict").eq(_bnrCount).fadeOut(400,"linear");
			_bnrCount++;
			if(_bnrCount ==  _bnrMax-1){
				 var str = _bnrcontent.find(".right").find("img").attr("src");
				 if(str.indexOf("_nouse")==-1){
					str = str.replace("_on.gif",".gif");
					str = str.replace("_on.jpg",".jpg");
					str = str.replace(".gif","_nouse.gif");
					str = str.replace(".jpg","_nouse.jpg");
					_bnrcontent.find(".right").find("img").attr("src",str);
				 }
			}
			var str = _bnrcontent.find(".left").find("img").attr("src");
			if(str.indexOf("_nouse")!=-1){
				str = str.replace("_nouse.",".");
				_bnrcontent.find(".left").find("img").attr("src",str);
			}
			 
			_bnrcontent.find(".pict").eq(_bnrCount).fadeIn(400,"linear");
		}
	})
	
}


/*--------------
mainFUNCTION
--------------*/
function funcmaincontent(){
    /*$("#maincontent .pict").each(function(i,d){
        console.log($(d).hasClass(".main"));
     })*/
	
	$("#maincontent").find(".main").css({
		"position":"absolute"
	});
	for(var i = 0 ; i < $("#maincontent").find(".element").length ;i++){
		if($("#maincontent").find(".element").eq(i).find("img").attr("src")){
			_imgArray.push($("#maincontent").find(".element").eq(i).find("img").attr("src"));
		}
	}
	if(/*@cc_on!@*/false){
		//IE
		setTimeout(startslide,400);
	}else{
		//Non IE
		if(_imgArray.length){
			loopImageLoader(0);
		}else{
			setTimeout(startslide,400);
		}
	}
	
	function loopImageLoader(i){
	  var image1 = new Image();
	  image1.src = _imgArray[i];
	  image1.onload = function(){
		i++;
		if(_imgArray.length != i){
		  loopImageLoader(i);
		}else{
			startslide();
		}
	  }
	}
	
	
	var _maxpage = 0;
	var _currentpage = 0;
	
	function startslide(){
		$("#maincontent").find(".element").css("display","inline-block");
		
		$("#maincontent").find(".right").hide();
		$("#maincontent").find(".left").hide();
		
		$("#maincontent").find(".right").fadeIn(600);
		$("#maincontent").find(".left").fadeIn(600);
		
		$("#maincontent").find(".left,.right").VogueRollOver();
		
		_maxpage = $("#maincontent").find(".pict").length;
		
		for(var i = 0 ; i < _maxpage ; i++){
            $('.navBottom ul li').eq(_currentpage).addClass('on').siblings("li").removeClass("on");
			var _pos = Math.round(1030*(i-_currentpage)+$(window).width()/2-515);
			var _opa = 0.2;
			if(i == _currentpage)_opa = 1;
			if(_pos > $(window).width()){
				_pos -= _maxpage*1030
			}else if(_pos < -1030){
				_pos += _maxpage*1030
			}
			$("#maincontent").find(".pict").eq(i).css({
				left:_pos,
				opacity:0
			})
			.animate({
				opacity:_opa
			},{
				duration:400 ,
				easing:'linear'
			})
		}
		$("#maincontent").stop().find(".main").removeClass("main");
		$("#maincontent").stop().find(".pict").eq(_currentpage).addClass("main").css({"position":"absolute"});
		
		
		window.onresize = function(){
			for(var i = 0 ; i < _maxpage ; i++){
				var _pos = Math.round(1030*(i-_currentpage)+$(window).width()/2-515);
				var _opa = 0.2;
				if(i == _currentpage)_opa = 1;
				if(_pos > $(window).width()){
					_pos -= _maxpage*1030
				}
				$("#maincontent").stop().find(".pict").eq(i).css({
					left:_pos,
					opacity:_opa
				})
			}
		}
		$("#maincontent").find(".right").click(nextPage);
		$("#maincontent").find(".left").click(prevPage);
	}
	function nextPage(){
		_currentpage++;
		if(_currentpage >  _maxpage-1)_currentpage = 0;
		$("#maincontent").stop().find(".main").removeClass("main");
		$("#maincontent").stop().find(".pict").eq(_currentpage).addClass("main").css({"position":"absolute"});;
		_pict = $("#maincontent").find(".pict");
        
        $('.navBottom ul li').eq(_currentpage).addClass('on').siblings("li").removeClass("on");
        
		for(var i = 0 ; i < _maxpage ; i++){
			var _pos = Math.round(1030*(i-_currentpage)+$(window).width()/2-515);
			var _opa = 0.2;
			if(i == _currentpage)_opa = 1;
			if(_pos > $(window).width()){
				_pos -= _maxpage*1030
			}else if(_pos < -1030*2){
				_pos += _maxpage*1030
			}
			_pict.eq(i)
			.stop()
			.css({
				left:_pos+1030
			})
			.animate({
				left:_pos,
				opacity:_opa
			},{
				duration:700 ,
				easing:'easeOutQuint'
			})
		}
	}
	setInterval(nextPage,5000);
	function prevPage(){
		_currentpage--;
		if(_currentpage< 0)_currentpage = _maxpage -1;
		$("#maincontent").stop().find(".main").removeClass("main");
		$("#maincontent").stop().find(".pict").eq(_currentpage).addClass("main").css({"position":"absolute"});;
        $('.navBottom ul li').eq(_currentpage).addClass('on').siblings("li").removeClass("on");
        
		for(var i = 0 ; i < _maxpage ; i++){
			var _pos = Math.round(1030*(i-_currentpage)+$(window).width()/2-515);
			var _opa = 0.2;
			if(i == _currentpage)_opa = 1;
			if(_pos < -1030){
				_pos += _maxpage*1030
			}else if(_pos > $(window).width()+1030){
				_pos -= _maxpage*1030
			}
			$("#maincontent").find(".pict").eq(i)
			.stop()
			.css({
				left:_pos-1030
			})
			.animate({
				left:_pos,
				opacity:_opa
			},{
				duration:700 ,
				easing:'easeOutQuint'
			})
		}
	}
}

/*----------------
ROLLOVER PLUG-IN
----------------*/

(function($){
  $.fn.VogueRollOver = function() {
    var _imgArray = new Array();
    for(var i = 0 ; i < this.length ; i++){
      var _str= this.eq(i).find("img").attr("src");
	  _str = _str.replace("_nouse.gif",".gif");
	  _str = _str.replace("_nouse.jpg",".jpg");
      _str= _str.replace(".gif","_on.gif");
	  //_str= _str.replace(".jpg","_on.jpg");
      _imgArray.push(_str);
    }
    loopImageLoader(0);
    function loopImageLoader(i){
if(_imgArray[i]){
      var image1 = new Image();
      image1.src = _imgArray[i];
      image1.onload = function(){
        i++;
        if(_imgArray.length != i){
          loopImageLoader(i);
        }
      }
}
    }
    return this.hover(function(){
      var str = $(this).find("img").attr("src");
      if(str.indexOf("_on")==-1 && str.indexOf("_nouse")==-1){
        str = str.replace(".gif","_on.gif");
		str = str.replace(".jpg","_on.jpg");
        $(this).find("img").attr("src",str);
      }
    },function(){
      var str = $(this).find("img").attr("src");
      str = str.replace("_on.gif",".gif");
	  str = str.replace("_on.jpg",".jpg");
      $(this).find("img").attr("src",str);
    });
  };
})($);
jQuery.easing['jswing'] = jQuery.easing['swing'];

/*-----
EASING
------*/

jQuery.extend( jQuery.easing,{
	def: 'easeOutQuint',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}
});

document.write('<style type="text/css">div#maincontent div.main{display:none;}div#maincontent div.element{position:absolute !important;}</style>')


/**
 / THIRD FUNCTION
 * getPageSize() by quirksmode.com
 *
 * @return Array Return an array with page width, height and window width, height
 */
function ___getPageSize() {
	var xScroll, yScroll;
	if (window.innerHeight && window.scrollMaxY) {	
		xScroll = window.innerWidth + window.scrollMaxX;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}
	var windowWidth, windowHeight;
	if (self.innerHeight) {	// all except Explorer
		if(document.documentElement.clientWidth){
			windowWidth = document.documentElement.clientWidth; 
		} else {
			windowWidth = self.innerWidth;
		}
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}	
	// for small pages with total height less then height of the viewport
	if(yScroll < windowHeight){
		pageHeight = windowHeight;
	} else { 
		pageHeight = yScroll;
	}
	// for small pages with total width less then width of the viewport
	if(xScroll < windowWidth){	
		pageWidth = xScroll;		
	} else {
		pageWidth = windowWidth;
	}
	arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);
	return arrayPageSize;
};
/**
 / THIRD FUNCTION
 * getPageScroll() by quirksmode.com
 *
 * @return Array Return an array with x,y page scroll values.
 */
function ___getPageScroll() {
	var xScroll, yScroll;
	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
		xScroll = self.pageXOffset;
	} else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
		yScroll = document.documentElement.scrollTop;
		xScroll = document.documentElement.scrollLeft;
	} else if (document.body) {// all other Explorers
		yScroll = document.body.scrollTop;
		xScroll = document.body.scrollLeft;	
	}
	arrayPageScroll = new Array(xScroll,yScroll);
	return arrayPageScroll;
};





$(function()
{
	//生成下部小按钮
	var length = $('#slideshow_photo a').length;
	for(var i = 0; i < length; i++)
	{
		$('<div class="slideshow-bt" index="'+(length-i)+'"></div>').appendTo('#slideshow_footbar');
    }
    $('#slideshow_footbar .slideshow-bt:last').addClass('bt-on');
    $('#slideshow_footbar .slideshow-bt').mouseenter(function(e)
    {
		slideTo(this);
    });
	
    var indexAllowAutoSlide = true;
    $('#slideshow_wrapper').mouseenter(function()
    {
		indexAllowAutoSlide = false;
    }).mouseleave(function()
    {
		indexAllowAutoSlide = true;
    });

	//滚动
    setInterval(function()
    {
		if (indexAllowAutoSlide) slideDown();
    },3000);

});

function slideDown()
{
	var currentBt = $('#slideshow_footbar .slideshow-bt.bt-on');
    if (currentBt.length <= 0) return;
    var nxt = currentBt.get(0).previousSibling;
    slideTo(nxt?nxt:$('#slideshow_footbar .slideshow-bt:last').get(0));
}

function slideTo(o)
{
	if (!o) return;
	var currentIndex = $('#slideshow_footbar .slideshow-bt.bt-on').attr('index'),
		current = $('#slideshow_photo a[index='+currentIndex+']');
	var nxt = $('#slideshow_photo a[index='+$(o).attr('index')+']');
	if (currentIndex == $(o).attr('index')) return;
	
	if (nxt.find('img[imgsrc]').length > 0)
	{
		var img =nxt.find('img[imgsrc]');
		img.attr('src',img.attr('imgsrc')).removeAttr('imgsrc');
	}
	
	$('#slideshow_footbar .slideshow-bt.bt-on').removeClass('bt-on');
	$(o).addClass('bt-on');
	
	nxt.css('z-index',2);
	
	current.css('z-index',3).fadeOut(500,function()
	{
		$(this).css('z-index','1').show();
		var img = nxt.next('a').find('img[imgsrc]');
		if (img.length > 0)
		{
			img.attr('src',img.attr('imgsrc')).removeAttr('imgsrc');
		}
	});
}
//slideshow end


//--------------------------------------------------------- 
function get_live_status(){ /* 首页直播设置 */
	var d = new Date(); //alert(d.getHours());
	if(d.getHours() <19) return; // 到19点才计时

	get_live_status_do();
	interval = window.setInterval(function(){ get_live_status_do(); }, 60000);
	//window.clearInterval(interval);	
}
function get_live_status_do(){
	$.post("/ajax/home_page.php?action=index_live", { key:'v' }, 
	function(data){	//alert(data);
		if(data !="" ){
			var pos=data.indexOf('@');
			var program_id=data.substring(0,pos);
			var tmp=data.substr(pos+1);

			var ps=tmp.indexOf('@');
			var img_url=tmp.substring(0,ps); 
			var title=tmp.substr(ps+1);

			$('#lmhd_live').show(); //显示直播div
			$('#lmhd_default').hide(); //隐藏在路上首图
			//$('#live_title').text(title);
			$('#lmhd_live_url_1').attr('href','/live/'+program_id);//直播链接
			$('#lmhd_live_url_2').attr('href','/live/'+program_id);
			$('#lmhd_live_url_3').attr('href','/live/'+program_id);
			$('#lmhd_live_src').attr('src','/'+img_url);//图片链接
		}else{
			$('#lmhd_live').hide();
			$('#lmhd_default').show();
		}
	});
}
//-------------------------------------------------------------------- 

/* 代码整理：懒人之家 www.lanrenzhijia.com */
function SlideShow(c) {
    var a = document.getElementById("slideContainer"), f = document.getElementById("slidesImgs").getElementsByTagName("li"), h = document.getElementById("slideBar"), n = h.getElementsByTagName("li"), d = f.length, c = c || 3000, e = lastI = 0, j, m;
    function b() {
        m = setInterval(function () {
            e = e + 1 >= d ? e + 1 - d : e + 1;
            g()
        }, c)
    }
    function k() {
        clearInterval(m)
    }
    function g() {
        f[lastI].style.display = "none";
        n[lastI].className = "";
        
        f[e].style.display = "block";
        n[e].className = "on";
        lastI = e
    }
    f[e].style.display = "block";
    a.onmouseover = k;
    a.onmouseout = b;
    h.onmouseover = function (i) {
        j = i ? i.target : window.event.srcElement;
        
        if (j.nodeName === "LI") {
            e = parseInt(j.innerHTML, 10) - 1;
            g()
        }
    };
    b()
}
/* 代码整理：懒人之家 www.lanrenzhijia.com */
/* 热点 专题切换 */
$(function(){
	var $tab_li = $('.project ul.tab li');
	$tab_li.hover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $tab_li.index(this);
		$('div.cont > dl').eq(index).show().siblings().hide();
	});	
});
$(function(){
    $(".project .zt dt").mousemove(function(){
        val = $(this).attr("class");
        $(".project .zt dd").hide();
        $(".project .zt dd."+val+"").show();
    })
    $(".project .zt dt:eq(0)").trigger("mousemove");
    
    $(".topNavCon .weixin").hover(function(){
        $(this).children(".curr").toggleClass("rcurr");
        $(this).toggleClass("on").children(".weixinImg").toggle();
    })
    $(".starCon .pic_155_200,.starCon .pic_100_100").hover(function(){
        $(this).children(".showDiv").toggle();
    })
    
    
    $(".pic_1 .pic_1_1").hover(function(){
        $(this).toggleClass("on_1_1").children(".pictitle").toggleClass("red");
    })
    $(".pic_1 .pic_1_2").hover(function(){
        $(this).toggleClass("on_1_2").children(".pictitle").toggleClass("red");
    })
    $(".pic_2 .pic_2_1").hover(function(){
        $(this).toggleClass("on_2_1").children(".pictitle").toggleClass("red");
    })
    $(".pic_2 .pic_2_2").hover(function(){
        $(this).toggleClass("on_2_2").children(".pictitle").toggleClass("red");
    })
    $(".pic_3 .pic_3_1").hover(function(){
        $(this).toggleClass("on_3_1").children(".pictitle").toggleClass("red");
    })
    $(".pic_3 .pic_3_2").hover(function(){
        $(this).toggleClass("on_3_2").children(".pictitle").toggleClass("red");
    })
    $(".pic_4").hover(function(){
        $(this).toggleClass("on_4").children(".pictitle").toggleClass("red");
    })
    
    $(".mainNav .search").hover(function(){
        $(this).toggleClass("searchOn").children(".searchMain").toggle();
    })
    $(".content .conBox .filmBox .filmShow").hover(function(){
        $(this).children(".index_proPlay").toggle();
    })
})
