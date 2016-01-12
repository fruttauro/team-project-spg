var userAnswers = [];

// Basic function to pass user input to the answer div
function passAnswer(qNumber) {
	var answerDiv = document.getElementById("q"+ qNumber +"Answer");
	aNumberDiv = document.getElementById("a" + qNumber + "NumberDiv");
	var answer = answerDiv.value;

	// Pass value to answer screen div
	aNumberDiv.innerHTML = answer;
	userAnswers.push({qNo: qNumber, answer: answer});
}