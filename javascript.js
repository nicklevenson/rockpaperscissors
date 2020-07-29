
    let playerscore = 0;
    let computerscore = 0;
    let gamevalue = "";
    let playervalue = "";
    let y = "";

// Initializing values
var isPlaying = true;

// On video playing toggle values
audio.onplaying = function() {
    isPlaying = true;
};

// On video pause toggle values
audio.onpause = function() {
    isPlaying = false;
};

// Play video function
function playVid() {      
    if (audio.paused && !isPlaying) {
        audio.play();
    }
} 

// Pause video function
function pauseVid() {     
    if (!audio.paused && isPlaying) {
        audio.pause();
    }
}
  
document.getElementById("buttonrock").onmouseover = function drumroll(){
    var audio2 = document.getElementsByTagName("audio")[1];
    audio.play();
    audio2.loop = true;
}
document.getElementById("buttonrock").onmouseout = function drumroll(){
    var audio2 = document.getElementsByTagName("audio")[1];
    audio2.pause();
}

document.getElementById("buttonpaper").onmouseover = function drumroll(){
    var audio2 = document.getElementsByTagName("audio")[1];
    audio2.play();
    audio2.loop = true;
}
document.getElementById("buttonpaper").onmouseout = function drumroll(){
    var audio2 = document.getElementsByTagName("audio")[1];
    audio2.pause();
}

document.getElementById("buttonscissors").onmouseover = function drumroll(){
    var audio2 = document.getElementsByTagName("audio")[1];
    audio2.play();
    audio2.loop = true;
}
document.getElementById("buttonscissors").onmouseout = function drumroll(){
    var audio2 = document.getElementsByTagName("audio")[1];
    audio2.pause();
}

  
document.getElementById("buttonrock").onclick = function changeitrock(){
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
    audio.currentTime=0;
    var audio2 = document.getElementsByTagName("audio")[1];
    audio2.pause();
    playervalue = "rock";
    console.log(playervalue);
    game(); }
 document.getElementById("buttonpaper").onclick = function changeitpaper(){
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
    audio.currentTime=0;
    var audio2 = document.getElementsByTagName("audio")[1];
    audio2.pause();
    playervalue = "paper";
    console.log(playervalue);
    game();  }
 document.getElementById("buttonscissors").onclick = function changeitscissors(){
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
    audio.currentTime=0;
    var audio2 = document.getElementsByTagName("audio")[1];
    audio2.pause();
    playervalue = "scissors";
    console.log(playervalue);
    game();  }
document.getElementById("restart").onclick = function restart(){
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
    audio.currentTime=0;
    var audio2 = document.getElementsByTagName("audio")[1];
    audio2.pause();
    setTimeout(function() {
    location.reload();}, 1000)

}



    function game() {

        round();

         if (playerscore == 5 && computerscore < 5) {
            //alert ("YOU FUCKING WIN THE TOURNAMENT!");
            const tournamentresults = document.querySelector('#tournamentresults');
            tournamentresults.textContent = "YOU WIN THE TOURNAMENT";
            var audio3 = document.getElementsByTagName("audio")[2];
            audio3.play();
            //location.reload();
            document.getElementById("buttonrock").disabled = true;
            document.getElementById("buttonpaper").disabled = true;
            document.getElementById("buttonscissors").disabled = true;
            }

        else if (playerscore < 5 && computerscore == 5) {
            //alert ("YOU FUCKING LOOSE THE TOURNAMENT!");
            const tournamentresults = document.querySelector('#tournamentresults');
            tournamentresults.textContent = "YOU LOSE THE TOURNAMENT";
            var audio4 = document.getElementsByTagName("audio")[3];
            audio4.play();
           //location.reload();
            document.getElementById("buttonrock").disabled = true;
            document.getElementById("buttonpaper").disabled = true;
            document.getElementById("buttonscissors").disabled = true;
            }

        else {
              
            }
    }

function round() {
 

    function computerPlay () {

         var randomvalue = Math.floor(Math.random() * 3); 
         
        
        if (randomvalue == 0) {
            gamevalue = "rock";
        }
        
        else if (randomvalue == 1) {
            gamevalue = "paper";
        }

        else {
            gamevalue = "scissors";
        }

        
    


    //function playerSelection() {
       // playerinput = prompt("Enter your move. Rock, Paper, or Scissors");
        // playervalue = playerinput.slice(0).toLowerCase();
        
   }

    

//playerSelection();
computerPlay();

    function winner() {
        if (gamevalue == "scissors" && playervalue == "scissors") {
            y = "TIE";
        }
        else if (gamevalue == "scissors" && playervalue == "paper"){
            //alert("you loose!");
            computerscore = computerscore + 1;
            y = "you lose!";
        }
        else if (gamevalue == "scissors" && playervalue == "rock"){
            //alert("you win!");
            playerscore = playerscore + 1;
            y = "you win!";
        }
        else if (gamevalue == "rock" && playervalue == "scissors"){
            //alert("you loose!");
            computerscore = computerscore + 1;
            y = "you lose!";
        }
        else if (gamevalue == "rock" && playervalue == "rock"){
            //alert("TIE");
            y = "TIE";
        }
        else if (gamevalue == "rock" && playervalue == "paper"){
            //alert("you win!");
            playerscore = playerscore + 1;
            y = "you win!";
        }
        else if (gamevalue == "paper" && playervalue == "scissors"){
            //alert("you win!");
            playerscore = playerscore + 1;
            y = "you win!";
        }
        else if (gamevalue == "paper" && playervalue == "paper"){
            //alert("TIE");
            y = "TIE";
        }
        else if (gamevalue == "paper" && playervalue == "rock"){
            //alert("you loose!");
            y = "you lose!";
            computerscore = computerscore + 1;
        }
        else {alert ("you didnt enter correctly")}
        
       
        }

        //alert("player plays " + playervalue);
    
winner();

    const container1 = document.querySelector('#scoreheadingcontainerplayer');
    container1.textContent = "Your score is " + playerscore + "/5";

    const container2 = document.querySelector('#scoreheadingcontainercomputer');
    container2.textContent = "Comp's score is " + computerscore + "/5";

    const playcontainer = document.querySelector('#computeractions');
    playcontainer.textContent = "Computer plays: " + gamevalue;

    const results = document.querySelector('#result');
    results.textContent = "This round " + y;
    }

//}
