// Wonderfully hand crafted hack to load div's on use of back/forward buttons in the browser
var popStateFired = false

window.onpopstate = function(e) {
	if (popStateFired) {
		return;
	}

	popStateFired = true
	window.location = document.location
	popStateFired = false
};

// Js for range sliders
var sliderRange = $('.input-range')
var sliderValue = $('.range-value');
sliderValue.html(sliderRange.attr('value'));
sliderRange.on('input', function(){
	sliderValue.html(this.value);
});

// Basic function to pass user input to the answer div
var userAnswers = [];

function passAnswer(qNumber) {

	var answerDiv = document.getElementById("q"+ qNumber + "Answer");
	aNumberDiv = document.getElementById("a" + qNumber + "NumberDiv");
	aAnswerDiv = document.getElementById("a" + qNumber + "AnswerDiv")
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

	if(answer == 0) {
		switch (aAnswerDiv.id) {
			case "a1AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>I hope you're bathing</h1><p class='lead'>Looks like you don't have a shower or just don't like them! That's fine with us.</p>"
			break;
			case "a2AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>No caffeine!?</h1><p class='lead'>You're a better person than us, bravo on getting through the day with nothing but the wits you were born with!</p>"
			break;
			case "a4AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>We won't ask</h1><p class='lead'>We will assume that your clothes get cleaned somehow and you're just not responsible for it personally...</p>"
			break;
			case "a10AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Do you live in a cave?</h1><p class='lead'>Come on now, let's not be silly. Go on back and give us a proper answer!</p>"
			break;
		}

		return;
	}

	// Need to edit this so that it only holds the most current answer
	// if they change their answer
	userAnswers.push({qNo: qNumber, answer: answer});

	switch (aNumberDiv.id) {

		case "a1NumberDiv":
		// Number of showers * 62L of water
		answerShowers = answer * 62
		aNumberDiv.innerHTML = answerShowers;
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
		// Number of bulbs * 12 pounds a years
		answer = answer * 12
		aNumberDiv.innerHTML = "&pound" + answer;
		break;
	}
}

function yesOrNo(yesNo, qNumber) {
	aAnswerDiv = document.getElementById("a" + qNumber + "AnswerDiv");

	if(yesNo == "yes") {

		switch (aAnswerDiv.id) {
			case "a3AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Turn it off!</h1><p class='lead'>If you brush your teeth twice a day for 2 minutes like a good person, you could be wasting around 24 litres of water every day.</p><p class='lead'>By turning the tap off you can save around 12-18 litres per time.</p>"
			break;

			case "a5AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Get a washing line</h1><p class='lead'>Tumble dryers are even worse than washing machines, costing around 62p per cycle, so if you use it twice a week over a year it costs around £64.50</p>.<p class='lead'>However if in the summer months you hang your clothes outside or on a clothes horse you can save over £15.</p>"
			break;

			case "a6AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Don't be lazy...</h1><p class='lead'>While using a dishwasher is getting more and more efficient, the standard dishwasher uses around 13 litres of water per cycle.</p><p class='lead'>A standard washing bowl in the sink is 8-9 litres. So, why not try using the dishwasher a few times less during the week and do a bowl of dishes instead?</p>"
			break;

			case "a7AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Nomnomnom</h1><p class='lead'>Good Job, just make sure you're storing your food in the correct way because even if you eat all your food on your plate, food can still go to waste if its not stored correctly as it goes off faster.</p>"
			break;

			case "a8AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Check your tyres!</h1><p class='lead'>Did you know under-inflated tyres will increase your car’s fuel consumption, wear out faster and reduce your car’s stability.</p>"
			break;
		}

	} else {

		switch (aAnswerDiv.id) {
			case "a3AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Go you!</h1><p class='lead'>Well done by turning the tap off you are saving around 12-18 litres of water per time.</p>"
			break;

			case "a5AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Wind power</h1><p class='lead'>Good, you're saving nearly £70 a year by not having a tumble dryer.</p>"
			break;

			case "a6AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Star scrubber</h1><p class='lead'>By not having a dishwasher you're saving 4-5 litres of water per wash so keep it up!</p>"
			break;

			case "a7AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Hells kitchen...</h1><p class='lead'>Food waste costs the average household £470 a year. There are two main reasons why we throw away good food: we cook or prepare too much or we don't use it in time.</p><p class='lead'>So to cut down why not if you make to much food freeze it for another meal?</p>"
			break;

			case "a8AnswerDiv":
			aAnswerDiv.innerHTML = "<h1>Yay, exercise</h1><p class='lead'>Whether you're conciously saving the planet by cycling (good work if so!) or just don't drive, make sure your friends and family check their tyre pressure so they perform as economically as possible.</p>"
			break;
		}

	}
}
