var numQuestion = 1;
var numOfCorrect = 0;
var numOfWrong = 0;

function numRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var sortQuestion = numRandom(0, 14);
document.getElementById("cauHoi").innerHTML = GroupQuestion[sortQuestion][0];
document.getElementById("dapAn_1").innerHTML = GroupQuestion[sortQuestion][1];
document.getElementById("dapAn_2").innerHTML = GroupQuestion[sortQuestion][2];
document.getElementById("dapAn_3").innerHTML = GroupQuestion[sortQuestion][3];
document.getElementById("dapAn_4").innerHTML = GroupQuestion[sortQuestion][4];

function button(x) {
	
	var valueClick = x.innerText;
	var check = valueClick == GroupQuestion[sortQuestion][1]

	console.log(valueClick);
	console.log(GroupQuestion[sortQuestion][1]);
	console.log(check);
	if (check == true) {
		numOfCorrect += 1;
	}else{
		numOfWrong += 1;
	}
	document.getElementById("numTrue").innerHTML = "SỐ ĐÁP ÁN ĐÚNG LÀ: " + numOfCorrect;
	document.getElementById("numFalse").innerHTML = "SỐ ĐÁP ÁN SAI LÀ: " + numOfWrong;
	console.log(numOfCorrect);
	console.log(numOfWrong);

	sortQuestion = numRandom(0, 14);
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
	if (numQuestion == 15 && numOfCorrect == 10) {
		location.href = "Win_Question_Quiz.html";
	}
}

















