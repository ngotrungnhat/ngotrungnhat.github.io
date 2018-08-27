const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 300;

function Component(X, Y, width, height, color) {
	this.X = X;
	this.Y = Y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.draw = function(){
		context.fillStyle = color;
		context.fillRect(this.X, this.Y, this.width, this.height);
	};
}
const piece = new Component(50, 50, 20, 20, 'red');
const obstacleOn_1 = new Component(200, 150, 20, 150, 'green');
const obstacleBelow_1 = new Component(200, 0, 20, 50, 'green');
const obstacleOn_2 = new Component(300, 200, 20, 100, 'blue');
const obstacleBelow_2 = new Component(300, 0, 20, 100, 'blue');
const obstacleOn_3 = new Component(400, 120, 20, 180, 'orange');
const obstacleBelow_3 = new Component(400, 0, 20, 20, 'orange');
piece.draw();
obstacleOn_1.draw();
obstacleBelow_1.draw();
obstacleOn_2.draw();
obstacleBelow_2.draw();
obstacleOn_3.draw();
obstacleBelow_3.draw();