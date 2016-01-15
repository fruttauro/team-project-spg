// Get hold of the last and current div so we know what to transition out and in
var oldDiv = "";
var newDiv = "";

$(".questionSelect > a, .btn").click(function(){

	window.onhashchange = function(e){

		oldDiv = "#" + e.oldURL.split("#")[1];
		newDiv = "#" + e.newURL.split("#")[1];
	}
})

// Hook up the progress bar to questions to record progress
var progressBar = document.getElementById("progressbar");
var currentProgress = 0;
var currentQuestion = false;

// Show the home and q1 button on quiz start
$("#startQuiz").click(function(){
	$("#homeLink").show();
	$("#q1Link").show();
})

$(".next").click(function() {

	currentProgress = oldDiv.split("q")[1] + 0;
	console.log(currentProgress)

	if(currentProgress <= progressBar.getAttribute("aria-valuenow")) {
		return;
	}

	// Ensure links are displayed to questions 
	currentQuestion = "#q" + (parseInt(oldDiv.split("q")[1]) + 1) + "Link";

	if(!$(currentQuestion)){ 
		return; 
	} 

	$("#q" + (parseInt(oldDiv.split("q")[1]) + 1) + "Link").show();


	progressBar.setAttribute("aria-valuenow", currentProgress)
	progressBar.style.width = currentProgress + "%";
	progressBar.innerHTML = currentProgress + "%";
})
