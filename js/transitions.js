var oldDiv = "";
var newDiv = "";
var oDiv = "";
var nDiv = "";
var tIn = ['zoomIn', 'zoomInUp', 'rollIn', 'lightSpeedIn', 'flipInX'];
var tOut = ['rotateOutDownRight', 'hinge', 'rollOut', 'lightSpeedOut', 'flipOutX'];

$(".questionSelect > a, .btn").click(function(){
	window.onhashchange = function(e){

		oDiv = e.oldURL.split("#")[1];
		nDiv = e.newURL.split("#")[1];
		var oldDiv = document.getElementById(oDiv);
		var newDiv = document.getElementById(nDiv);
		var rTIn = tIn[Math.floor(Math.random() * tIn.length)];
		var rTOut = tOut[Math.floor(Math.random() * tOut.length)];

		if (!oldDiv == null) {
			oldDiv.className='cover-container hidden';
		}

		newDiv.getElementsByClassName('cover-container')[0].className='cover-container ' + rTIn;
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

	currentProgress = oDiv.split("q")[1] + 0;
	console.log(currentProgress)

	if(currentProgress <= progressBar.getAttribute("aria-valuenow")) {
		return;
	}

	// Ensure links are displayed to questions 
	currentQuestion = "#q" + (parseInt(oDiv.split("q")[1]) + 1) + "Link";

	if(!$(currentQuestion)){ 
		return; 
	} 

	$("#q" + (parseInt(oDiv.split("q")[1]) + 1) + "Link").show();


	progressBar.setAttribute("aria-valuenow", currentProgress)
	progressBar.style.width = currentProgress + "%";
	progressBar.innerHTML = currentProgress + "%";
})
