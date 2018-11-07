
var current = null;
var cards = [
	"img_card/1back1.png",
	"img_card/1back2.jpg",
	"img_card/2back3.jpg",
	"img_card/2back4.jpg",
	"img_card/3back5.jpg",
	"img_card/3back6.jpeg",
	"img_card/4back7.jpg",
	"img_card/4back8.jpg",
];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
return array;
}

function flip(card){
	$(card).toggleClass("flipped");
	if (!current) {
		current = $(card);
		current.css('pointer-events', 'none');
	} else {
		if (current.attr("data-class") != $(card).attr("data-class")) {
			setTimeout(function(){
				$(card).toggleClass("flipped");
				current.toggleClass("flipped");
				$(card).css('pointer-events', 'auto');
				current.css('pointer-events', 'auto');
				current = null;
			}, 500);
			console.log("Khác nhau");
		} else {
			setTimeout(function(){
				$(card).css("opacity", "0");
				current.css("opacity", "0");
				current = null;
				$(card).css('pointer-events', 'auto');
				current.css('pointer-events', 'auto');
			},500);
			console.log("Giống nhau")
		}
	}
};

$(document).ready(function(){
	var newArr = cards.concat(cards, cards);
	newArr = shuffleArray(newArr);
	console.log(newArr);

	for (var i = 0; i < newArr.length; i++) {
		$(".content").append('<div class="grid">'+ '<div class="card"  data-class = "'+newArr[i].charAt(9)+'" onclick="flip(this)">'+			
				'<div class="front">'+
					'<img src="img_card/front.png">'+
				'</div>'+
				'<div class="back">'+
					'<img src="'+newArr[i]+'">'+
				'</div>'+
			'</div>'+
		'</div>')
		console.log(newArr[i].charAt(9));
	}
	$(".content").append('<div class = "clearBoth"></div>');
});

function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.height() / timetotal;
    $element.find('div').animate({ height: progressBarWidth }, 500).html();

    if(timeleft > 0) {
        setTimeout(function() {progress(timeleft - 1, timetotal, $element);}, 1000);
    }
    console.log(timeleft)
    document.getElementById("timeBar").innerHTML = timeleft;
};
progress(60, 60, $('#progressBar'));



















