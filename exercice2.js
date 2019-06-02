const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const knightMoves = [[1,2],[2,1],[1,-2],[-2,1],[-1,2],[2,-1],[-1,-2],[-2,-1]]; // all possible moves for the knight

// transforms coordinates from object to display format
function toDisplayFormat(x, y) {
	return letters[x-1] + y;
}

// given a certain position returns a string containing possible moves for the knight
function getNextPositions(positionCoordinates) {
	let newPositionsString = '';
	for (let i = 0; i < knightMoves.length; i++) {
		const newX = positionCoordinates.x + knightMoves[i][0];
		const newY = positionCoordinates.y + knightMoves[i][1];
		if ((1 <= newX && newX <= 8) && (1 <= newY && newY <= 8)) {
			newPositionsString += toDisplayFormat(newX, newY) + ' ';
		}
	}
	return newPositionsString;
}

// transforms coordinates from display format (user's input) to an object
function fromDisplayFormat(displayFormat) {
	const xLetter = displayFormat.toUpperCase().charAt(0);
	const x = letters.indexOf(xLetter) + 1;
	const y = +displayFormat.charAt(1);
	return {x: x, y: y};
}

// checking user input for errors
function inputCheck(displayFormat) {
	let noErrors = true;
	const xLetter = displayFormat.toUpperCase().charAt(0);
	let x = letters.indexOf(xLetter);
	let y = displayFormat.charAt(1);
	if (x === -1 || isNaN(y) || y < 1 || y > 8) {
		noErrors = false;
	}
	return noErrors;
}

function showNextPositions(displayFormat) {
	if (inputCheck(displayFormat)) {
		document.getElementById("error").style.visibility = "hidden";
		const positionCoordinates = fromDisplayFormat(displayFormat);
		const newPositionsString = getNextPositions(positionCoordinates);
	  	alert("Возможные варианты хода:\n\n" + newPositionsString);
	} else {
		document.getElementById("error").style.visibility = "visible";
	}
}