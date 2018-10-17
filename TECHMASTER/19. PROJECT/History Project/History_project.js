
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
// $(document).ready(function(){
// 	$(".pageList li:nth-child(n)").hover(function(){
// 		$(".grid4__col div.cards:nth-child(n)").css({"color": "#ca27b1", "cursor": "pointer", "border": "2px solid #ca27b1"});
// 	}, function(){
// 		$(".grid4__col div.cards:nth-child(n)").css({"color": "#753721", "border": "none"});
// 	});
// });

// $(document).ready(function(){
// 	$("div.cards").hover(function(){
// 		$(this).css({"color": "#ca27b1", "cursor": "pointer", "border": "2px solid #ca27b1"});
// 	}, function(){
// 		$(this).css({"color": "#753721", "border": "none"});
// 	});
// });


var modal = document.getElementById('story-01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function(){
	let index;
	const lis = $('.pageList li');
	const cards = $('.cards');
	lis.hover(function(){
		index = $(this).attr('data-test');
		const cardIndex = $(`.cards[data-hover='${index}']`);
		$(cardIndex).css({"color": "#ca27b1", "cursor": "pointer", "border": "2px solid #ca27b1"});
	}, function(){
		cards.css({"color": "#753721", "border": "none"});
	});
});




// let html = `<div class="containerFoot">
// 								<div class="foot footRight" data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-offset="300"><img src="Image_history/footprint_right.png" alt=""></div>
// 								<div class="foot footLeft" data-aos="fade-zoom-in" data-aos-duration="3000" data-aos-offset="300"><img src="Image_history/footprint_left.png" alt=""></div>
// 							</div>`;

// for (let i = 0; i< 10; i++){
// 	$('.contentBetween').append(html);
// }




//BACK TO TOP
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1500);
    });
});


$(document).ready(function(){
	$('html,body').animate({},10000)
});


















