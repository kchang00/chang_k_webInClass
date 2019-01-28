(() => {
	// JS file structure
	
	/*
		- variables always first
		- functions in middle
		- event handling at bottom
	 */
	
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// Variables here (let = more modern version of var)
	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	// functions in the middle
	function createPuzzlePieces(pictureIndex) {
		//generate puzzle pieces for the left hand side randomly
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt ="thumbnail">`;
			
			piecesBoard.innerHTML += newPuzzlePiece;
		});

	// ` = back tick = template string? Can pass variables into a string (can log things to console)
	// $ reference a variable 

		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;
	}

	function resetPuzzlePieces() {
		// swap out all of the images when clicking on a bottom button
		// 1. empty the container
		piecesBoard.innerHTML = " ";
		createPuzzlePieces(this.dataset.puzzleref);
	}

	//event handling down here
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	createPuzzlePieces(0);

})();
