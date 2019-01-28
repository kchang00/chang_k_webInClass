(() => {
	// select the elements that you want to work with

	// query selector automatically gets first element in section
	let theButton = document.querySelector("#buttonHolder img");
	//window.addEventListener("load", changeHeaderText);

	// functions go in the middle

	function changeHeaderText() {
		document.querySelector("h1").textContent = "I'm taking over.  - Your Friend, JS"
	}

	function changeSubText() {
		document.querySelector("#headLine p").textContent = "I'm the best."
	}

	// event handling goes at the bottom
	theButton.addEventListener("click", changeHeaderText);
	theButton.addEventListener("click", changeSubText);
	// set up the puzzle pieces and boards

})();
