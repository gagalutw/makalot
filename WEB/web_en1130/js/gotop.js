// JavaScript Document
$(function(){
	//置底的top鈕;
	$(window).scroll(function(){
		var $scrollTop=$('.scrollTop'),
			_winCenter=$(window).outerWidth(true)/2
	var _scrollTop=$(window).scrollTop()



		// $scrollTop.css({
		// 	position:'fixed',
		// 	bottom:0,
		// 	right:0,
		// 	// left:_winCenter+350,
		// 	zIndex:9999
		// })



		if(_scrollTop>200){
			$scrollTop.stop().animate({
				opacity:1
			})
		}else{
			$scrollTop.stop().animate({
				opacity:0
			})
		}




	})


	//回到top;
	var $win=$(window),
		$htmlBody=$('html,body'),
		$scrollTop=$('.scrollTop'),
		_scrollTop=$win.scrollTop(),
		_top=0;

	$scrollTop.click(function(event){
		event.preventDefault();
		$htmlBody.animate({
			scrollTop:_top

		},400)
	})


})



