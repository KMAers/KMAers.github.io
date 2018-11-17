 $(function(){

 	$(".xuong,.kn").click(function()
 	{
 		$('body,html').animate({scrollTop:$('#khoiedu').offset().top},800)
 		return false;
 	})

 	$(".sp, .lienhe").click(function()
 	{
 		$('body,html').animate({scrollTop:$('#khoisanpham').offset().top},800)
 		return false;
 	})
 	
})  
 