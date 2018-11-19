
function pageQuestion() {
	document.getElementById("introGame").style.display = "none";
	document.getElementById("playGame").style.display = "block";
};

var numQuestion = 0;
var numOfCorrect = 0;
var numOfWrong = 0;
//	KỸ THUẬT TẠO RA SỐ NGẪU NHIÊN
function numRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//CÂU HỎI KHỞI TẠO
var sortQuestion = numRandom(0, 14);
document.getElementById("cauHoi").innerHTML = GroupQuestion[sortQuestion][0];
document.getElementById("dapAn_1").innerHTML = GroupQuestion[sortQuestion][1];
document.getElementById("dapAn_2").innerHTML = GroupQuestion[sortQuestion][2];
document.getElementById("dapAn_3").innerHTML = GroupQuestion[sortQuestion][3];
document.getElementById("dapAn_4").innerHTML = GroupQuestion[sortQuestion][4];

function button(x) {
	var valueClick =  x.innerText;
	var check = valueClick == GroupQuestion[sortQuestion][1]//"Check" LÀ MỘT BIẾN DẠNG BOOLEAN
	if (check == true) {
		numOfCorrect += 1;
	}else{
		numOfWrong += 1;
	}
	document.getElementById("scoresGame").innerHTML = numOfCorrect;
	sortQuestion = numRandom(0, 14);
	//RANDOM VỊ TRÍ ĐÁP ÁN
	var sortAnswer_1 = numRandom(1, 4);
	var sortAnswer_2, sortAnswer_3, sortAnswer_4;
	if (sortAnswer_1 == 1) {
		sortAnswer_2 = 2;
		sortAnswer_3 = 3;
		sortAnswer_4 = 4;
	}else if (sortAnswer_1 == 2) {
		sortAnswer_2 = 3;
		sortAnswer_3 = 4;
		sortAnswer_4 = 1;
	}else if (sortAnswer_1 == 3) {
		sortAnswer_2 = 4;
		sortAnswer_3 = 1;
		sortAnswer_4 = 2;
	} else{
		sortAnswer_2 = 1;
		sortAnswer_3 = 2;
		sortAnswer_4 = 3;
	}
	document.getElementById("cauHoi").innerHTML = GroupQuestion[sortQuestion][0];
	document.getElementById("dapAn_1").innerHTML = GroupQuestion[sortQuestion][sortAnswer_1];
	document.getElementById("dapAn_2").innerHTML = GroupQuestion[sortQuestion][sortAnswer_2];
	document.getElementById("dapAn_3").innerHTML = GroupQuestion[sortQuestion][sortAnswer_3];
	document.getElementById("dapAn_4").innerHTML = GroupQuestion[sortQuestion][sortAnswer_4];
	numQuestion += 1;
	document.getElementById("numQuestion").innerHTML = (numQuestion + "/" + 15);
}

//ĐỒNG HỒ ĐẾM THỜI GIAN
var time = 60;
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    time = time - 1;
    document.getElementById("timePlay").innerHTML = time;
    if (time == 0) { 
		clearInterval(myVar);
 	}
}