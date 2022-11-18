$(document).ready(function(){
	
	$(".btnsubscribe").click(function(){
		$(this).addClass("subscribed")
		$(".btnsubscribe span").text("Subscribed")
		$(".text2").animate({
			opacity:'1.0',
			fontSize:'20px',
		})
		$(this).slideDown(2000)
	})
	$(".btnlike").click(function(){
		$(".btnlike img").attr("src","icons/like2.png")
	})
	$(".btnnotify").click(function(){
		$(this).addClass("notifyclick")
	})
})