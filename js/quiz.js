var userAnswers = [];

// Basic function to pass user input to the answer div
function passAnswer(qNumber) {

	var answerDiv = document.getElementById("q"+ qNumber +"Answer");
	aNumberDiv = document.getElementById("a" + qNumber + "NumberDiv");
	var answer = answerDiv.value;

	// Validation to ensure user can't advance with no value entered
	// This will need moving out when handling for true/false answers is implemented
	var errorDiv = document.getElementById("q" + qNumber + "Error");
	if(errorDiv.innerHTML !== "") {
		errorDiv.innerHTML = "";
	}

	if(answer == ""){
		errorDiv.innerHTML = "We kinda need an answer!"
		this.event.returnValue = false;
	}

	// Pass value to answer screen div
	aNumberDiv.innerHTML = answer;
	userAnswers.push({qNo: qNumber, answer: answer});
}

function trueAnswer() {
	
}

function falseAnswer() {

}
