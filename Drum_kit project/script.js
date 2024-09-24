//Mouse Click
var buttons = document.querySelectorAll(".drum").length;
for (var a = 0; a < buttons; a++) {
    document.querySelectorAll(".drum")[a].addEventListener("click", function handleclick() {

        var buttonInnerHtml = this.innerHTML;
        soundPlay(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//Key Press 
document.addEventListener("keypress", function (event) {
    soundPlay(event.key);
    buttonAnimation(event.key);
});

//Sound Play
function soundPlay(key) {
    switch (key) {
        case "S":
            var volume2 = new Audio("sounds/volume2.mp3");
            volume2.play();
            break;

        case "R":
            var volume4 = new Audio("sounds/volume4.mp3");
            volume4.play();
            break;

        case "G":
            var volume5 = new Audio("sounds/volume5.mp3");
            volume5.play();
            break;

        case "M":
            var volume6 = new Audio("sounds/volume6.mp3");
            volume6.play();
            break;

        case "P":
            var volume7 = new Audio("sounds/volume7.mp3");
            volume7.play();
            break;

        case "D":
            var volume3 = new Audio("sounds/volume3.mp3");
            volume3.play();
            break;

        case "N":
            var volume1 = new Audio("sounds/volume1.mp3");
            volume1.play();
            break;
        default: console.log('Hi there is no sound');


    }
}

function buttonAnimation(value) {
    var animation = document.querySelector("." + value);
    animation.classList.add("pressed");

    setTimeout(() => {
        animation.classList.remove("pressed");
    }, 100);
}