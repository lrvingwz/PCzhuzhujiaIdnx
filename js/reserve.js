$(function(){	
	laydate({
		  elem: '#start',
		  format: 'YYYY/MM/DD hh:mm:ss',
		  min: laydate.now(), //设定最小日期为当前日期
		  max: '2099-06-16 23:59:59', //最大日期
		  istime: true,
		  istoday: false,
		  choose: function(datas){
		     end.min = datas; //开始日选好后，重置结束日的最小日期
		     end.start = datas //将结束日的初始值设定为开始日
		  }
	
	  });
laydate({
	  elem: '#end',
	  format: 'YYYY/MM/DD hh:mm:ss',
	  min: laydate.now(), //设定最小日期为当前日期
	  max: '2099-06-16 23:59:59', //最大日期
	  istime: true,
	  istoday: false,
	  choose: function(datas){
	     end.min = datas; //开始日选好后，重置结束日的最小日期
	     end.start = datas //将结束日的初始值设定为开始日
	  }
     });

		$(".first_li").mouseover(function(){
		$(this).css('background','url(images/li_first_bg.png)');
	});
	$(".first_li").mouseout(function(){
		$(this).css('background','');
	});
	var map = new BMap.Map("allmap");
	var textBtn = $('.placeholder');
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);

			textBtn.text(r.address.province+r.address.city);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true});

	$('#wrapper').mouseenter(function(){
		$(this).find('div.left_qq').stop(true);
		$(this).find('div.left_qq').animate({
							left:0
		})
	});
	$('#wrapper').mouseleave(function(){
		$(this).find('div.left_qq').animate({
							left:-43
		})
	});

});