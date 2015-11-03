function question(questionNo, question, positiveAnswer, negativeAnswer) {

	var newQuestion = {
		questionNo: questionNo,
		question: question,
		positiveAnswer: positiveAnswer,
		negativeAnswer: negativeAnswer
	}

	return newQuestion;
}

var questions = [];
// Foreach question in the .json file, make a question object and add it to the questions array.

var newQ = question(1, "Who are you?", "Cool!", "No you're not")
questions.push(newQ)
console.log(questions)