$(function(){
	$('.main_head>ul>li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).find('i').addClass('color11a750').siblings().removeClass('color11a750');
			var index = $(this).index();
	$('.book_hotel_list').css('display','none');
	$('.book_hotel_list').eq(index).css('display','block');
	});
	
//	地图地位js
	var map = new BMap.Map("allmaps");
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
		
	
});