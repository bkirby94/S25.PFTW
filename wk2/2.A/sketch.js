//Array of Questions
const questionsAndAnswers = [
{
  question: "What is Barbie's full name?",
  answer: "Barbara Millicent Roberts"
},
{
  question: "What is the name of the fictional town Barbie grew up in?",
  answer: "Willows, Wisconsin"
},
{
  question: "When was Barbie born?",
  answer: "March 9, 1959"
},
{
  question: "What is the Pantone code for Barbie Pink?",
  answer:"PMS 219"
},
{
  question:"How tall is Barbie?",
  answer:"11.5 inches"
},
{
  question: "What band sings Barbie Girl?",
  answer: "Aqua"
},
{
  question: "What year was Barbie joined by Ken?",
  answer: "1961"
},
{
  question: "What was the best-selling Barbie doll?",
  answer: "Totally Hair Barbie"
},
{
  question: "How much did the first Barbie cost?",
  answer: "$3.00"
},
{
  question: "What year did Barbie travel into space?",
  answer:"1965"
}
];

//Random question options
const randomNumber = Math.floor(Math.random() * questionsAndAnswers.length);

//Prompt user with a random question
const userAnswer = window.prompt(questionsAndAnswers[randomNumber].question);

//Alert showing user answer and correct answer
window.alert("You answered " + userAnswer + ". The correct answer was " + questionsAndAnswers[randomNumber].answer);
