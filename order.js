var typeOfCustomer,
	amount,
	involvment;
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
function moreAmount(){
	$("#one").css("display", "none");
	$("#amount_text").css("display", "block")
	$("#more").addClass("active form_button")
}
function getAmount(e){
	if (e=="one") {
		amount=e;
		$("#more").removeClass("active form_button");
		$("#one").addClass("active form_button");
	}
	else{
		// if (este numar?) {}
		amount="more";
		$("#one").removeClass("active form_button");

		$("#more").addClass("active form_button")
	}
}
function timeAmount(e){
	involvment=e;
	if (e=="yes") {
		if ($("#yes").hasClass("active form_button")) {
			$("#no").css("display", "block");
			$("#yes").removeClass("active form_button");
			$("#amount_time").css("display", "none");
			$("#no").removeClass("active form_button");


			// involvment=$("#amount_text").val();
			// get time value
		}
		else{
			$("#yes").addClass("active form_button");
			$("#no").css("display", "none");
			$("#amount_time").css("display", "block");
		}
	}
	else{
		$("#no").css("display", "block");
		$("#amount_time").css("display", "none");
		$("#no").addClass("active form_button");
	}
}
function getStep2(e){
	$("#step2").css("display", "none");
	$("#step3").css("display", "block");
	console.log(amount);
	console.log(involvment);
}
function getStep3(e){
	$("#step3").css("display", "none");
	$("#step4").css("display", "block");
}
function getStep4(e){
	$("#step4").css("display", "none");
	$("#step5").css("display", "block");
}
