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

		// If we are going to a question page, animate the image
		var currentSVGs = [];
		//custom handing for q9 because it has multiple paths
		if (nDiv == "q9") {
			currentSVGs = document.getElementsByClassName("q9ImgPath");

			if(currentSVGs.length > 0) {
				for (var i = 0; i < currentSVGs.length; i++) {
					if(currentSVGs[i].classList.contains('drawSVG')) {
						currentSVGs[i].classList.remove('drawSVG');
						currentSVGs[i].offsetWidth = currentSVGs[i].offsetWidth;
					}

					currentSVGs[i].classList.add('drawSVG')
				};
			}
		} 
		// Handling for the rest of the questions
		else {
			var currentSVG = document.getElementById(nDiv + "ImgPath");
			if(nDiv.indexOf("q") != -1) {

				if(currentSVG.classList.contains('drawSVG')) {
					currentSVG.classList.remove('drawSVG');
				// Hack to trigger the CSS animation again
				currentSVG.offsetWidth = currentSVG.offsetWidth;
			}

			currentSVG.classList.add('drawSVG');
		}
	}
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

	if(parseInt(currentProgress) <= progressBar.getAttribute("aria-valuenow")) {
		console.log("test")
		return;
	}

	// Ensure links are displayed to questions 
	currentQuestion = "#q" + (parseInt(oDiv.split("q")[1]) + 1) + "Link";

	if(!$(currentQuestion)){ 
		return; 
	} 

	var answeredQ = document.getElementById("q" + oDiv.split("q")[1] + "Link");
	answeredQ.classList.add("answeredQ");
	$("#q" + (parseInt(oDiv.split("q")[1]) + 1) + "Link").show();

	progressBar.setAttribute("aria-valuenow", currentProgress)
	progressBar.style.width = currentProgress + "%";
	progressBar.innerHTML = currentProgress + "%";
})
