
//RESIZE CHIỀU CAO CỦA FIXED THEO FLAG.
$(".fixedFlag").height($(".flag").height());


// console.log(scaleOpacity.toFixed(2));

function opacity(){

	var arrScale = [];
	var heightScroll = $("html").scrollTop();
	var heightScreen = screen.availHeight;
	var scaleOpacity = heightScroll/heightScreen;

	for (i = 2; i >= 0; i = i-0.2) {
		// console.log(i.toFixed(2));
		arrScale.push(i.toFixed(2));
		console.log(arrScale);
	}

	for (var j = 0; j <= 1; j = j + 0.1) {
		// console.log(j.toFixed(1));
		if (scaleOpacity.toFixed(2) >= arrScale[j.toFixed(1)*10] && scaleOpacity.toFixed(2) <= arrScale[j.toFixed(1)*10 +1]) {
			console.log("j: " + j.toFixed(1));
			// $(".flag").css("opacity","j.toFixed(1)");
		}
		console.log("arrScale[j*10]: " + arrScale[j.toFixed(1)*10]);
		console.log("scaleOpacity: " + scaleOpacity.toFixed(2));
		console.log("arrScale[j*10+1]: " + arrScale[j.toFixed(1)*10 + 1]);
	}
}
opacity()
// function myInterval(){
// 	interval = setInterval(opacity, 1000);
// }
// myInterval();

// $(".flag").css("opacity","0.5");

//TOGGLE WHEN SMALL SCREEN
function navbarToggle(x){
	if ($(".navHeader").css("display") == "block") {
		$(".navHeader").css({"display": "none", "transition": "all 5s"});
		x.classList.toggle("change");
	} else {
		$(".navHeader").css({"display": "block", "transition": "all 5s"});
		x.classList.toggle("change");
	}
};

//EFECT HOVER
$(document).ready(function(){
	$("div.promo").hover(function(){
		$(this).css({"color": "#ca27b1", "cursor": "pointer"});
	}, function(){
		$(this).css("color", "#753721");
	});
});

$(document).ready(function(){
	$("div.cards").hover(function(){
		$(this).css({"color": "#ca27b1", "cursor": "pointer", "border": "2px solid #ca27b1"});
	}, function(){
		$(this).css({"color": "#753721", "border": "none"});
	});
});


























