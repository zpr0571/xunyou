$(window).load(function(){
	//flexslider初始化
	$('.flexslider').flexslider();

	//将slider导航按钮设置在中间显示
	$('.flex-direction-nav .flex-prev').css('left',(2000-window.innerWidth)/2+30);
	$('.flex-direction-nav .flex-next').css('right',(2000-window.innerWidth)/2+30);

	//加载完成，播放条幅动画
	$('div.h3').delay(100).animate({right:500},300);
	$('div.h4').delay(200).animate({right:537},300);
	$('div.dw').delay(300).animate({right:516},300);
}).resize(function(){	
	// 窗口大小变化时，重新计算导航箭头的位置
	//将slider导航按钮设置在中间显示
	$('.flex-direction-nav .flex-prev').css('left',(2000-window.innerWidth)/2+30);
	$('.flex-direction-nav .flex-next').css('right',(2000-window.innerWidth)/2+30);
}).scroll(function(){
	$('ul.info-list').each(function(){
		//当前滚动高度
		var scrollTop = $(window).scrollTop()+$(window).height()-$(this).offset().top;
		if(scrollTop >= 100){
			$(this).find('li').css({
				visibility:'visible',
				animationName:'bounceIn'
			});
		}
	})
})