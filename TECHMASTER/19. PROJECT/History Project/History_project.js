
//RESIZE CHIỀU CAO CỦA FIXED THEO FLAG.
$(".fixedFlag").height($(".flag").height());

//OPACITY FLAG
// function opacity(){
// 	var arrScale = [];
// 	var heightScroll = $("html").scrollTop();
// 	var heightScreen = screen.availHeight;
// 	var scaleOpacity = heightScroll/heightScreen;
// 	for (i = 2; i >= 0; i = i-0.2) {
// 		arrScale.push(i.toFixed(2));
// 	}
// 	for (var j = 0; j <= 1; j = j + 0.1) {
// 		if (scaleOpacity.toFixed(2) >= arrScale[j.toFixed(1)*10] && scaleOpacity.toFixed(2) <= arrScale[j.toFixed(1)*10 +1]) {
// 		}
// 	}
// }
// opacity()

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

// Get the modal
var modal = document.getElementById('story-01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


























