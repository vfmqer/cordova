//访问API接口公共类
function generateUrl(id){  //生成url
	
	var	keyswitcher="1123456789";
	var baseurl="http://192.168.1.104/api.php?keys=7fff7c317d3d5eeef988d15c6934d111&datetime=2015-05-08-05-33&id=0"+id;
/*	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	month=month<10?"0"+month:month;
	var day=date.getDay();
	day=day<10?"0"+day:day;
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var timestamp=year+"-"+month+"-"+day+"-"+hours+"-"+minutes;
	var md5keys=$.md5(keyswitcher+timestamp);
	var finalurl=baseurl+md5keys+"&datetime="+timestamp+"&id="+id;*/
	
	return baseurl;
}




function PostSubmit(urls, postdata) 
{  
$.ajax({
		url:urls,
		type: 'POST',
		dataType: 'json',		 
		data:jQuery.param(postdata,true),//重点   
	})
	.done(function(ret) {
		return ret.a;
		console.log("success");
	});
	

}
 

function closeTip(target,wincover){ //关闭提示窗口
$(target).fadeOut();
$(wincover).fadeOut();
event.preventDefault();
}
function openTip(tip,target,cover){  //打开提示窗口
var leftposi=($(window).width()-$(target).width())/2;
var topposi=($(window).height()-$(target).height())/2;	
$(target).css({'left':leftposi,'top':topposi-100});
$(target).children('p').text(tip);
$(target).fadeIn();
$(cover).fadeIn();
}
