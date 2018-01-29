
var numberOfSquares = 6;
var colors = generateRandonColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

//modeButtons eventListener
function setupModeButtons() {
	for(var i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numberOfSquares = 3: numberOfSquares = 6;
			// if(this.textContent === "EASY") {
			// 	numberOfSquares = 3;
			// } else {
			// 	numberOfSquares = 6;
			// }
			reset();
		});
	}
}

function setupSquares() {
	for (var i=0; i <squares.length; i++) {
	//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color or clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				h1.style.backgroundColor = clickedColor;
				messageDisplay.textContent = "CORRECT!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
			} else { 
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "TRY AGAIN!";
			}
		});
	}
}

function reset() {
	//generate all new colors
	colors = generateRandonColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i=0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
}


resetButton.addEventListener("click", function() {
	reset();
})


function changeColors(color) {
	//loop through all squares
	for (var i=0; i<squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	};
}

function pickColor() {
	var random = Math.floor( Math.random() * colors.length );
	return colors[random];
}

function generateRandonColors (num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 to 255
	var red = Math.floor ( Math.random() * 256 );
	//pick a "green" from 0 to 255
	var green = Math.floor ( Math.random() * 256 );
	//pick a "blue" from 0 to 255
	var blue = Math.floor ( Math.random() * 256 );
	// "rgb(red, green, blue)"
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}