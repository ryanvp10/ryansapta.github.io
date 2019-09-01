$( document ).ready(function(){
	if ($(".splashscreen").is(":visible")) {
		$(".wrapper").css({"opacity":"0"});
	}
	$(".splash-arrow").click(function() {
		$(".splashscreen").slideUp("800",function(){
		$(".wrapper").delay(100).animate({"opacity":"1.0"},800);
	});
});
});

$(window).scroll(function() {
    $(window).off("scroll");
    $(".splashscreen").slideUp("800", function() {
        $("html, body").animate({"scrollTop":"0px"},100);
        $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
    });
});