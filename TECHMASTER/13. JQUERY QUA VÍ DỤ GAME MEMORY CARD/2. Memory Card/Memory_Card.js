
var current = null;
var cards = [
	"img_card/back1.gif",
	"img_card/back2.gif",
	"img_card/back3.jpg",
	"img_card/back4.jpg",
	"img_card/back5.jpg",
	"img_card/back6.jpg",
	"img_card/back7.jpg",
	"img_card/back8.jpg",
	"img_card/back9.png",
	"img_card/back10.jpg",
	"img_card/back1.gif",
	"img_card/back2.gif",
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
	var newArr = cards.concat(cards);
	newArr = shuffleArray(newArr);
	console.log(newArr);

	for (var i = 0; i < newArr.length; i++) {
		$(".content").append('<div class="grid">'+ '<div class="card"  data-class = "'+newArr[i]+'" onclick="flip(this)">'+

			//lỗi đặt data-class và onclick không đúng chỗ
			
				'<div class="front">'+
					'<img src="img_card/front.jpg">'+
				'</div>'+
				'<div class="back">'+
					'<img src="'+newArr[i]+'">'+
				'</div>'+
			'</div>'+
		'</div>')
	}
	$(".content").append('<div class = "clearBoth"></div>');
});



















