// Basic function to pass user input to the answer div

var userAnswers = [];

function passAnswer(qNumber) {
	var answer = document.getElementById("q"+ qNumber +"Answer").value;
	aNumberDiv = document.getElementById("a" + qNumber + "NumberDiv");

	aNumberDiv.innerHTML = answer;
	userAnswers.push({qNo: qNumber, answer: answer});
	console.log(userAnswers)
}