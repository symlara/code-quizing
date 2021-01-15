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


// selecting all required variables
var startBtn = document.querySelector(".startBtn");
var submitBtn = document.querySelector(".submitBtn");
var option_list = document.querySelector(".option_list");
var back_button = document.querySelector(".back_button");
var clear_scores = document.querySelector(".clear_scores");
var timerEl = document.getElementById('countdown');

//create a function for countdown?
