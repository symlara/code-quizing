// variables for reference to quiz section
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");



// The array of questions for the quiz

var questions = [
    { q: 'Commonly used data types DO Not Include:',  
    a: {
        1: "strings",
        2: "booleans",
        3: "alerts",
        4: "numbers"
    },
    correctAnswer: "3"
 },
 {
     q: 'The condition in an if / else statement is enclosed with ___.',
     a: {
         1: "quotes",
         2: "curly brackets",
         3: "parenthesis",
         4: "square brackets"
     },
     correctAnswer: "3"
 },
 {
     q: 'Arrays in JavaScript can be used to store ___.',
     a: {
         1: "numbers and strings",
         2: "other arrays",
         3: "booleans",
         4: "all of the above"
     },
     correctAnswer: "4"
 },
 {
     q: 'String values must be enclosed within ___ when being assigned to variables.',
     a: {
         1: "commas",
         2: "curly brackets",
         3: "quotes",
         4: "parenthesis"
     },
     correctAnswer: "3"
 },
 {
     q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
     a: {
         1: "JavaScript",
         2: "terminal/bash",
         3: "for loops",
         4: "console.log"
     },
     correctAnswer: "4"
 }

];
