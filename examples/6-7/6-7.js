$(document).ready(function(){
	$('#animateDiv').on('click',function(){
		$('div').animate({left:'100px', opacity:1}, 1000);
	});
});

//animate({display:'none'}, 1000)// doesn't work, animate不能用在css非數字特性的改變。
//animate ({font:'16px 16px sans-serif'}, 1000) doesn't work