$(function(){
	var curPageload = 2;
	var curPage = 1;
	var catid = 6;
	//生成栏目项
    $(".sideLeft .menu ul li").click(function(){
    	var curPage = 1;
    	curPageload =2;
    	catid = $(this).attr("catid");
    	$.ajax({
            type:"GET",
            url:"/ajax.php?m=content&c=news&a=ajaxdata",
            data:{page:curPage,catid:catid},
            dataType:"json",
            success:function(data){
                var str = "";
                $.each(data,function(index,row){
                    str +="<li>";
                    str +="<h3><a target=\"_blank\" href=\""+row.url+"\">"+row.title+"</a></h3>";
                    str +="<a target=\"_blank\" href=\""+row.url+"\"><img src=\""+row.thumb+"\" /></a>";
                    str +="<p>"+row.description+"</p>";
                    str +="<span class=\"left\">"+row.updatetime+"</span><em class=\"bdsharebuttonbox\"  data=\"\{\'url\':\'"+row.url+"\'\}\"><a onmousemove=\"getUrl(\'"+row.url+"\')\" href=\"javascript:void(0)\" class=\"bds_tsina\" data-cmd=\"tsina\" title=\"分享到新浪微博\" data-url=\""+row.url+"\"></a><a onmousemove=\"getUrl(\'"+row.url+"\')\" href=\"javascript:void(0)\" class=\"bds_qzone\" data-cmd=\"qzone\" title=\"分享到QQ空间\" data-url=\""+row.url+"\"></a><a onmousemove=\"getUrl(\'"+row.url+"\')\" href=\"javascript:void(0)\" class=\"bds_weixin\" data-cmd=\"weixin\" title=\"分享到微信\" data-url=\""+row.url+"\"></a><a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a></em></span>";
                    str +="</li>";
                });
                $(".newsIndex").html(str);
            }
        })
    });
  //加载更多
    $(".sideLeft .loading").hover(function(){
    	$(this).toggleClass("on");
    })

    $(".sideLeft .loading").click(function(){
    	$.ajax({
            type:"GET",
            url:"/ajax.php?m=content&c=news&a=ajaxdata",
            data:{page:curPageload,catid:catid},
            dataType:"json",
            success:function(data){
                var str = "";
                $.each(data,function(index,row){
                    str +="<li>";
                    str +="<h3><a target=\"_blank\" href=\""+row.url+"\">"+row.title+"</a></h3>";
                    str +="<a target=\"_blank\" href=\""+row.url+"\"><img src=\""+row.thumb+"\" /></a>";
                    str +="<p>"+row.description+"</p>";
                    str +="<span class=\"left\">"+row.updatetime+"</span><em class=\"bdsharebuttonbox\"  data=\"\{\'url\':\'"+row.url+"\'\}\"><a onmousemove=\"getUrl(\'"+row.url+"\')\" href=\"javascript:void(0)\" class=\"bds_tsina\" data-cmd=\"tsina\" title=\"分享到新浪微博\" data-url=\""+row.url+"\"></a><a onmousemove=\"getUrl(\'"+row.url+"\')\" href=\"javascript:void(0)\" class=\"bds_qzone\" data-cmd=\"qzone\" title=\"分享到QQ空间\" data-url=\""+row.url+"\"></a><a onmousemove=\"getUrl(\'"+row.url+"\')\" href=\"javascript:void(0)\" class=\"bds_weixin\" data-cmd=\"weixin\" title=\"分享到微信\" data-url=\""+row.url+"\"></a><a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a></em></span>";
                    str +="</li>";
                });
                $(".newsIndex li").eq(-1).after(str);
                curPageload++;
            }
        })
    });

});
