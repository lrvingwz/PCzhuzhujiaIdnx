$(function(){
	var height_distance = 285;
	var box = $('.list_box');
	var box_height = $('.list_box').height();
	var fiexd_li = $('.fiexd>ul>li');
	var first_li_height = fiexd_li.first().height();
	for(var i=1;i<fiexd_li.length;i++){
			fiexd_li[i].style.top = height_distance+(i*first_li_height)+'px';
	};

	var box1_height = box.eq(0).height();
	var box_offset_top=[];

	box.each(function(i){
		box_offset_top.push($(this).offset().top);
	});
	var offsetTop;
	$(document).scroll(function(){
		  offsetTop= $(window).scrollTop();
		  for(var i=1;i<box_offset_top.length;i++){
			var offset_top = box_offset_top[i]+box1_height/2;
			var scroll_top = $(window).height()+offsetTop;
			var k = i*first_li_height;
			var n = scroll_top-offset_top;
			if(scroll_top>offset_top&&n>100){
				fiexd_li.eq(i).stop(true,false);
				fiexd_li.eq(i).animate({
								top:i*first_li_height
				})
				
			}else{
				fiexd_li.eq(i).stop(true,false);
				fiexd_li.eq(i).animate({
								top:(i-1)*first_li_height+height_distance
				}).dequeue();
			}
			}
		
	});

	fiexd_li.click(function(){
		var index = $(this).index();
		$('html,body').animate({
			scrollTop:box.eq(index).offset().top
		})
	});

});