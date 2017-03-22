$(function(){
	$('.city-picker-span').css('width','auto');
	laydate({
		  elem: '#J-xl',
		  format: 'YYYY/MM/DD',
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
	  elem: '#J-xls',
	  format: 'YYYY/MM/DD',
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
	/*var map = new BMap.Map("allmap");
	var textBtn = $('.placeholder');
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);

			textBtn.text(r.address.province+r.address.city);
			$(".city").text(r.address.city);
			$(".provinces").text(r.address.province);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true});*/

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
	
	$('#J-xl').bind('blur', function() {
		var days = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
		var _self = $(this);
		setTimeout(function(){
			var date = _self.val();
			 var reg = /[^\d]/g;
       		var ds = date.split (reg);
       		var str = ds[0]+"/"+ds[1]+"/"+ds[2];
			var dat = new Date(str);
			var dats = dat.getDay();
			var theday = days[dats];
			_self.val(date+theday);

		},100);
	
		
	}); 	
    $('#J-xls').bind('blur', function() {
		var days = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
		var _self = $(this);
		setTimeout(function(){
			var date = _self.val();
			 var reg = /[^\d]/g;
       		var ds = date.split (reg);
       		var str = ds[0]+"/"+ds[1]+"/"+ds[2];
			var dat = new Date(str);
			var dats = dat.getDay();
			var theday = days[dats];
			_self.val(date+theday);

		},100);
	
		
	}); 		
			
		
	
    

});