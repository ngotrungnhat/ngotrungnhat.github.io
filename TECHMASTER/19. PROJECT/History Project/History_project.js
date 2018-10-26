
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
// });// $(document).ready(function(){
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






//WHEEL ITEM
window.onload = function () {
    wheel = new wheelnav('wheelDiv');
    wheel.keynavigateEnabled = true;
    wheel.slicePathFunction = slicePath().DonutSlice;
    wheel.sliceTransformFunction = sliceTransform().RotateTransform;
    wheel.animatetime = 1000;
    wheel.animateeffect = 'linear';
    wheel.slicePathFunction = slicePath().CogBasePieSlice;
    wheel.sliceHoverPathFunction = slicePath().CogSlice;
    wheel.sliceSelectedPathFunction = slicePath().CogSlice;
    wheel.sliceHoverTransformFunction = sliceTransform().RotateTitleTransform;
    wheel.sliceSelectedTransformFunction = sliceTransform().MoveMiddleTransform;
    wheel.wheelRadius = wheel.wheelRadius * 0.8;
    wheel.hoverPercent = 0.9;
    wheel.selectedPercent = 1.1;
    wheel.wheelRadius = wheel.wheelRadius * 0.8;
    wheel.colors = colorpalette.fractallove;

    wheel.initWheel(["imgsrc:../Image_history/Image_Games/duhanhthoigian.png", "imgsrc:../Image_history/Image_Games/latthe.jpeg", "imgsrc:../Image_history/Image_Games/quiz.ico", "imgsrc:../Image_history/Image_Games/vongquanhthegioi.png"]);

    wheel.navItems[0].navigateFunction = function(){
    	$(".infoGame01").css({"display": "block"});
		$(".infoGame02").css({"display": "none"});
		$(".infoGame03").css({"display": "none"});
		$(".infoGame04").css({"display": "none"});

    };
    wheel.navItems[1].navigateFunction = function(){
    	$(".infoGame01").css({"display": "none"});
		$(".infoGame02").css({"display": "block"});
		$(".infoGame03").css({"display": "none"});
		$(".infoGame04").css({"display": "none"});
    };
    wheel.navItems[2].navigateFunction = function(){
    	$(".infoGame01").css({"display": "none"});
		$(".infoGame02").css({"display": "none"});
		$(".infoGame03").css({"display": "block"});
		$(".infoGame04").css({"display": "none"});
    };
    wheel.navItems[3].navigateFunction = function(){
    	$(".infoGame01").css({"display": "none"});
		$(".infoGame02").css({"display": "none"});
		$(".infoGame03").css({"display": "none"});
		$(".infoGame04").css({"display": "block"});
    };
    wheel.createWheel();
};



// JAVASCRIPT JQUERYUI SLIDER PRICE
$(function(){
    $('#rangeslider').slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [ 0, 1000000 ],
        slide: function( event, ui ) {
            var string_01 = ui.values[0].toString(),
            string_02 = ui.values[1].toString(),
            numLength_01 = string_01.length,
            numLength_02 = string_02.length;

            if (numLength_01 <= 3) {
              $('#rangeval01').html(string_01);
          } else if (numLength_01 <=6) {
              $('#rangeval01').html(string_01.substr(0, (numLength_01-3)) + "." + string_01.substr((numLength_01-3), 3));
          } else {
              $('#rangeval01').html(string_01.substr(0, 1) + "." + string_01.substr(1, 3) + "." + string_01.substr(4, 3));
          }

          if (numLength_02 <= 3) {
              $('#rangeval02').html(string_02);
          } else if (numLength_02 <=6) {
              $('#rangeval02').html(string_02.substr(0, (numLength_02-3)) + "." + string_02.substr((numLength_02-3), 3));
          } else {
              $('#rangeval02').html(string_02.substr(0, 1) + "." + string_02.substr(1, 3) + "." + string_02.substr(4, 3));
          }



      }
  });
});

























