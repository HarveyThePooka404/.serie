$(window).on("load", function(){
	$(".loader-wrap").fadeOut("slow");
})


$(document).click(function(event) {
  $target = $(event.target);
  if(!$target.closest('#project_module').length &&
  $('#module_container').is(":visible")) {
    $('#module_container').hide();
  }
});

function showProjectModule(){
	document.getElementById("module_container").style.display="block";
}



$(allInView);
$(window).scroll(allInView);
var lastMenuActive="home";

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function allInView() {
    if (isScrolledIntoView($("#home"))){
    	$(".menu_item_p").removeClass("border");
    	$(".menu_item_p").removeClass("bl-tr");
    	$(".menu_item_o").removeClass("border");
    	$(".menu_item_o").removeClass("bl-tr");
    	$(".menu_item_a").removeClass("border");
    	$(".menu_item_a").removeClass("bl-tr");
    }

    if (isScrolledIntoView($("#pp"))){
    	$(".menu_item_o").removeClass("border");
    	$(".menu_item_o").removeClass("bl-tr");
    	$(".menu_item_a").removeClass("border");
    	$(".menu_item_a").removeClass("bl-tr");
    	$(".menu_item_p").addClass("border bl-tr active");
    }

    if (isScrolledIntoView($("#order"))){
    	$(".menu_item_p").removeClass("border");
    	$(".menu_item_p").removeClass("bl-tr");
    	$(".menu_item_a").removeClass("border");
    	$(".menu_item_a").removeClass("bl-tr");
    	$(".menu_item_o").addClass("border bl-tr active");
    }
    if (isScrolledIntoView($("#about"))){
    	$(".menu_item_p").removeClass("border");
    	$(".menu_item_p").removeClass("bl-tr");
    	$(".menu_item_o").removeClass("border");
    	$(".menu_item_o").removeClass("bl-tr");
    	$(".menu_item_a").addClass("border bl-tr active");
    }
}
