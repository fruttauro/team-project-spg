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

// Dynamic loading of questions and answers
var questionObjects = [];

function question(questionNo, question, positiveAnswer, negativeAnswer) {
	var newQuestion = {
		questionNo: questionNo,
		question: question,
		positiveAnswer: positiveAnswer,
		negativeAnswer: negativeAnswer
	}

	return newQuestion;
}

function ajax(url, callback) {

	var ajaxRequest = new XMLHttpRequest(); 
	var resultList = document.querySelector('#result');

	var handleResponse=function()
	{
		if(ajaxRequest.status === 200 && ajaxRequest.readyState === 4){
			var data = JSON.parse(ajaxRequest.responseText)
			callback(data)
		}
	}

	ajaxRequest.onreadystatechange = handleResponse; 
	ajaxRequest.open('GET', url, true);
	ajaxRequest.send(null);
}

function populateQuestions(res) {

	Object.keys(res).forEach(function(key){
		var newQuestion = question(key, res[key].questionText, res[key].positiveAnswer, res[key].negativeAnswer)
		questionObjects.push(newQuestion);
	});

	console.log(questionObjects)
}

//var test = ajax('../questions.json', populateQuestions)

var range = $('.input-range')
var value = $('.range-value');
value.html(range.attr('value'));
range.on('input', function(){
	value.html(this.value);
});
