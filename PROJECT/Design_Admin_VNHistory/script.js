//TOGGLE WHEN SMALL SCREEN
function navbarToggle(x){
	if ($(".navHeader").css("display") == "block") {
		$(".navHeader").css({"display": "none", "transition": "all 10s ease 5s"});
		x.classList.toggle("change");
	} else { 
		$(".navHeader").css({"display": "block", "transition": "all 10s ease 5s"});
		x.classList.toggle("change");
	}
};