const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const knightMoves = [[1,2],[2,1],[1,-2],[-2,1],[-1,2],[2,-1],[-1,-2],[-2,-1]]; // all possible moves for the knight

// transforms coordinates from object to display format
function toDisplayFormat(x, y) {
	return letters[x-1] + y;
}

// given a certain position returns a string containing the possible moves for the knight
function getNextPositions(positionCoordinates) {
	let newPositionsString = '';
	for (let i = 0; i < knightMoves.length; i += 1) {
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

function showNextPositions(displayFormat) {
	const positionCoordinates = fromDisplayFormat(displayFormat);
	const newPositionsString = getNextPositions(positionCoordinates);
  	alert("Возможные варианты хода:\n\n" + newPositionsString);
}