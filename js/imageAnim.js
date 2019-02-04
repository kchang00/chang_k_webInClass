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

	//node list is like an array we can iterate over

	let dropZones = document.querySelectorAll('.drop-zone');

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
	
		initDrag();

	}

	// drag and drop functionality goes here
	
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('Go ahead and drag')

				e.dataTransfer.setData('text/plain', this.id);
			})
		})
	}

	// handle dragover and drop
	
	dropZones.forEach(zone => {
		zone.addEventListener('dragover', function(e) {
			e.preventDefault();
			console.log('AH PUT ME DOWN!');
		});

		zone.addEventListener('drop', function(e) {
			e.preventDefault();
			console.log('I ate it uwu');

			let piece = e.dataTransfer.getData('text/plain');
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});

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
