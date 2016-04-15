$(document).ready(function(){
	
	$("#button").click(function(){
		$("#dark").show();
	});
// when you click the button, the lightbox opens.

	$("#dark").click(function(){
		$("#dark").hide();
	});
// when you click anywhere on the page, the lightbox closes.

});