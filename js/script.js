// Slider	
$(function(){
  $('.bxslider').bxSlider({
    startSlide: 0,
	auto: true
  });
});
// Popover
$(".qrcode a").popover({ 
 trigger: "click",
 template: '<div class="qrcode popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
 html:true 
 });  
