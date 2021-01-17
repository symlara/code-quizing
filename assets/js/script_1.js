const submit = document.getElementById("submit");


document.getElementById("submit").addEventListener("click", displayHighScores);




function displayHighScores() {

    const clickedButton = 
    document.getElementById("submit");
    const clickedToken = 
    clickedButton.innerText;

if(clickedButton == "submit"){
 // render window.location url page with the results and intial label input on it
 window.location.href = "highscores.html";
}

   
}




