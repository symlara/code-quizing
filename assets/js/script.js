// select all elements 
const start = document.getElementById("start");
const question = document.getElementById("question");
const options = document.getElementById("options");
const option1 = document.getElementById("1");
const option2 = document.getElementById("2");
const option3 = document.getElementById("3");
const option4 = document.getElementById("4");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("scoreContainer");
const submitBtn = document.getElementById("submit");


const optionBtns = 
document.querySelectorAll(".option");
optionBtns.forEach(function (button) {
    button.style.display = "none";
    
});

const initialForm =

document.querySelectorAll(".forms");
initialForm.forEach(function (form) {
    form.style.display = "none";

  
});



// The array of questions, options, and answers for the quiz

let questions = [
    { question: 'Commonly used data types DO Not Include:',  
    options: [ 
        "1. strings", 
        "2. booleans", 
        "3. alerts", 
        "4. numbers" ],
    answer: 2
 
}, {
     question: 'The condition in an if / else statement is enclosed with ___.',
     options: [ 
         "1. quotes", 
         "2. curly brackets", 
         "3. parenthesis", 
         "4. square brackets" ],
     answer: 2
     },
     
 {
     question: 'Arrays in JavaScript can be used to store ___.',
     options: [
         "1. numbers and strings", 
         "2. other arrays", 
         "3. booleans", 
         "4. all of the above"],
     answer: 3
     },
     
 {
     question: 'String values must be enclosed within ___ when being assigned to variables.',
     options: [
         "1. commas", 
         "2. curly brackets", 
         "3. quotes", 
         "4. parenthesis" ],
     correctAnswer: 2
    },
 {
     question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
     options: [
         "1. JavaScript", 
         "2. terminal/bash", 
         "3. for loops", 
         "4. console.log"],
     answer: 3
     }];

     


// creating new variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 75;
const questionTime = 10; // 10s
const gaugeWidth = 20; // 20px
const gaugeUnit = gaugeWidth / questionTime
let TIMER;
let score = 0;





// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    option1.innerHTML = q.options[0];
    option2.innerHTML = q.options[1];
    option3.innerHTML = q.options[2];
    option4.innerHTML = q.options[3];
}

function renderAnswer() {
    question.innerHTML = "<p>"+ q.question +"</p>";
    question.innerHTML = q.answer[0];
}


start.addEventListener("click", startQuiz);



//start quiz
function startQuiz() {
    count -= 2;
    start.style.display = "none";
    document.getElementById("myDIV").style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s

    optionBtns.forEach(function (button) {
        button.style.display = "inline-block";
    });

    initialForm.forEach(function (form) {
        form.style.display = "none";
    });
}



// counter render
function renderCounter() {
    if(count > questionTime){
        counter.innerHTML = count;
        
    }else {
        count = 75;
        // preview alert?
        if(runningQuestion < lastQuestion){
            renderQuestion();
        }else {
            // end quiz
            clearInterval(TIMER);
        }
    }
}


// checkAnswer

function checkAnswer(answer){
    const clickedButton = 
    document.getElementById(answer);
    const clickedAnswer = 
    clickedButton.innerText;
    
    count -= 1;
    const answerIndex = 
    questions[runningQuestion].answer;

    const runningAnswer = 
    questions[runningQuestion].options[answerIndex];
    if (clickedAnswer === runningAnswer) {
        score++;
        window.alert("Correct!");
        console.log("correct");
        // answer is correct//
    }else {
        score--;
        count -= 10;
        window.alert("Incorrect!");
        console.log("incorrect")
        // answer is incorrect..
    }

    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
        
    }else{
        quiz.style.display = "none";
        // end the quiz / render score
        clearInterval(TIMER);


        submitBtn.addEventListener("click", function(event) {
            
        })
        


        // show form for users to type initials
       
       
       initialForm.forEach(function (form) {
        form.style.display = "inline-block";
        
    });
       
}


var userinitial = "initials";
localStorage.setItem("initial", userinitial);

var userinitial = 
localStorage.getItem("initials");




// write logic for what happens when the submit button is clicked


}



function userInitials() {
    var userContent = 
    document.getElementById("initials").value;
    
}
