var progressBar = document.getElementById("progressbar");
var oldDiv = "";
var newDiv = "";
var currentProgress = 0;

// Get hold of the last and current div so we know what to transition out and in
$(".questionSelect > a, .btn").click(function(){

	window.onhashchange = function(e){

		oldDiv = "#" + e.oldURL.split("#")[1];
		newDiv = "#" + e.newURL.split("#")[1];
	}
})

// Hook up the progress bar to questions to record progress
$(".next").click(function() {

	currentProgress = oldDiv.split("q")[1] + 0;

	// Return if they've gone back to an old question as their progress should still be the same
	if(currentProgress <= progressBar.getAttribute("aria-valuenow")) {
		return;
	}

	progressBar.setAttribute("aria-valuenow", currentProgress)
	progressBar.style.width = currentProgress + "%";
	progressBar.innerHTML = currentProgress + "%";
})
