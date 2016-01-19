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
		return;
	}

	switch (aNumberDiv.id) {

		case "a1NumberDiv":
		// Number of showers * 62L of water
		answer = answer * 62
		aNumberDiv.innerHTML = answer;
		break;

		case "a2NumberDiv":
		var perDay = (answer * 0.025).toFixed(2);
		var perDayDiv = document.getElementById("a2NumberDiv2");
		var perWeek = (perDay * 7).toFixed(2);
		var perWeekDiv = document.getElementById("a2NumberDiv3");
		var perMonth = (perDay * 30).toFixed(2);
		var perMonthDiv = document.getElementById("a2NumberDiv4");
		var perYear = (perMonth * 12).toFixed(2);
		var perYearDiv = document.getElementById("a2NumberDiv5");

		aNumberDiv.innerHTML = answer;
		perDayDiv.innerHTML = "&pound" + perDay;
		perWeekDiv.innerHTML = "&pound" + perWeek;
		perMonthDiv.innerHTML = "&pound" + perMonth;
		perYearDiv.innerHTML = "&pound" + perYear;
		break;

		case "a4NumberDiv":
		var perYear = ((answer * .5) * 52).toFixed(2);
		var perYearDiv = document.getElementById("a4NumberDiv2");
		var savingPerYear = (perYear * .4).toFixed(2);
		var savingDiv = document.getElementById("a4NumberDiv3");
		aNumberDiv.innerHTML = answer;
		perYearDiv.innerHTML = "&pound" + perYear;
		savingDiv.innerHTML = "&pound" + savingPerYear;
		break;

		case "a10NumberDiv":
		// Number of bulbs * 12 pounds a year
		answer = answer * 12
		aNumberDiv.innerHTML = "&pound" + answer;
		break;
	}

	userAnswers.push({qNo: qNumber, answer: answer});
}

function trueAnswer() {

}

function falseAnswer() {

}
