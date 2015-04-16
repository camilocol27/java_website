// this function sis to slide up and down the 2 paragraph
$(document).ready(function(){
	$(".hide").click(function(){
		$("p").slideUp(4000);
	});
		$(".show").click(function(){
		$("p").slideDown(2000);
		
	});
});
// in this part is slide the footer to the right 
$(".foot").animate({		
	width:800,
	left:1000,
	},5000)
// this the header 1 desapear and show for couple seconds 
var width = $(window).width()

	$("h1").hide(1000);
		$("h1").animate({
			width:1285

	}, 5000, function(){
		$("h1").show(1000);
	
})
// here i give an alert 
alert("Welcome to my Web");


