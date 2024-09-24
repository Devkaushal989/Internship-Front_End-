var buttonColours = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
}); 


$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamepattern[currentLevel] === userClickedPattern[currentLevel]) {
        // console.log("success");

        if (gamepattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        // console.log("wrong");
        playsound("wrong");

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
            
        }, 2000);

        startOver();

        $("#level-title").text("Game Over Press Any key to restart");
        
    }
}

function nextSequence() {

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);   
    let randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    // console.log( randomNumber);
    // console.log(randomChosenColour)
    gamepattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomChosenColour);
    animatePress(randomChosenColour)
}

function playsound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}

function animatePress(value) {
    $("#" + value).addClass("pressed");

    setTimeout(() => {
        $("#" + value).removeClass("pressed");
    }, 100);
}

function startOver(){
  level = 0;
  gamepattern = [];
  started = false;
}