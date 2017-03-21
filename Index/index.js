$(function(){
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 1000,//可选选项，自动滑动
		pagination : '.swiper-pagination',
	})
	var mySwiper1 = new Swiper('.swiper-container1', {
		slidesPerView : 5,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	});
	var mySwiper2 = new Swiper('.swiper-container2', {
		slidesPerView : 6,
	})
})