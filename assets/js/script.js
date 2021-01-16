// select all elements 
const start = document.getElementById("start");
const question = document.getElementById("question");
const options = document.getElementById("options");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("scoreContainer");



// The array of questions, options, and answers for the quiz

let questions = [
    { question: 'Commonly used data types DO Not Include:',  
    options: [ "1. strings", "2. booleans", "3. alerts", "4. numbers" ],
    answer: "alerts"
 
}, {
     question: 'The condition in an if / else statement is enclosed with ___.',
     options: [ "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets" ],
     answer: "parenthesis"
     },
     
 {
     question: 'Arrays in JavaScript can be used to store ___.',
     options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
     answer: "all of the above"
     },
     
 {
     question: 'String values must be enclosed within ___ when being assigned to variables.',
     options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis" ],
     correctAnswer: "quotes"
    },
 {
     question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
     options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
     answer: "console.log"
     }];

// creating new variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 75;
const questionTime = 15; // 15s
const gaugeWidth = 20; // 20px
const gaugeUnit = gaugeWidth / questionTime
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    options.innerHTML = q.options;
}

start.addEventListener("click", startQuiz);

//start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}









