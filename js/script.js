var questionObjects = [
{
	"questionText": "1",
	"positiveAnswer": "",
	"negativeAnswer": ""
},
{
	"questionText": "2",
	"positiveAnswer": "",
	"negativeAnswer": ""
},
{
	"questionText": "3",
	"positiveAnswer": "",
	"negativeAnswer": ""
},
{
	"questionText": "4",
	"positiveAnswer": "",
	"negativeAnswer": ""
},
{
	"questionText": "5",
	"positiveAnswer": "",
	"negativeAnswer": ""
},
{
	"questionText": "6",
	"positiveAnswer": "",
	"negativeAnswer": ""
}	
]

function question(questionNo, question, positiveAnswer, negativeAnswer) {
	var newQuestion = {
		questionNo: questionNo,
		question: question,
		positiveAnswer: positiveAnswer,
		negativeAnswer: negativeAnswer
	}

	return newQuestion;
}

var questionArray = [];

for (var i = 0; i < questionObjects.length; i++) {
	var currentQuestion = question(questionObjects[i], questionObjects[i].questionText, questionObjects[i].positiveAnswer, questionObjects[i].negativeAnswer) ;
	questionArray.push(currentQuestion)

};

console.log(questionArray)
