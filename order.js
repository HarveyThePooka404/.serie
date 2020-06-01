var typeOfCustomer,
	amount;
function getStep1(e){
	typeOfCustomer=e;
	$("#step1").css("display", "none");
	$("#step2").css("display", "block");
	console.log(typeOfCustomer);
}
function prevStep(e){
	$("#step1").css("display", "none");
	$("#step2").css("display", "none");
	$("#step3").css("display", "none");
	$("#step4").css("display", "none");
	$("#step"+e).css("display", "block");
}
// function moreAmount(){
// 	$("#one").css("display", "none");
// 	$("#amount_text").css("display", "block")
// 	$("#more").css("background","#BF9C88")
// }

// function getAmount(e){
// 	if (e=="one") {
// 		amount=1;
// 		$("#one").css("background","#BF9C88");
// 	}
// 	else{
// 		// if (este numar?) {}
// 		amount=$("#amount_text").val();
// 	}
// 	console.log(amount);
// }
function getAmount(e){
	amount=e;
}
