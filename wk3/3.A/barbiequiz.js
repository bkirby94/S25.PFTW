//Array of Questions
let questionsAndAnswers = [
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

let responseColor;
let response;
let wrongCount=0

//next random question fuction 
function nextQuestion() {
  if(questionsAndAnswers.length < 1) {
    alert('you won');
    return;
  }
  const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
  return questionsAndAnswers[randomIndex];
}

function checkQuestion() {
   if (currentQuestion.answer.toLowerCase() === questionInput.value().toLowerCase()) {
    //remove correct answer from array
    questionsAndAnswers = questionsAndAnswers.filter((questionsAndAnswersObj) => {
      return currentQuestion.answer !== questionsAndAnswersObj.answer;
    });
    //this is the correct condition
    response = 'correct! next question';
    responseColor = ('pink');
  } else {
    wrongCount+=1;
    //this is the wrong answer condition
    response = 'oops, that wasn\'t quite right! Try another';
    responseColor = ('pink');
  }
  questionInput.value('');
  if (wrongCount>=5){
    alert('you lost')
  } else {
    currentQuestion = nextQuestion();
    message = currentQuestion.question;
  }
}

currentQuestion = nextQuestion();
let message = currentQuestion.question;

//styles setup
function setup() {
  createCanvas(800, 600);
  heading = createElement('h1', ['Barbie Quiz']);
  heading.position(100, 100);
  questionInput = createInput('');
  questionInput.size(250, 24);
  questionInput.position(100, 220);
  submitAnswerButton = createButton('submit answer');
  submitAnswerButton.size(250, 24);
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(100, 250);
}

//
function draw() {
  background('#EC4399');
  fill('#FDB9C8');
  textSize(24);
  text(message, 100, 200);
  text(response, 100, 350);
}



