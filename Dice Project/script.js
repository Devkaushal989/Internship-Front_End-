$(".roll_dice").click(function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var randomImage = "images/dice" + randomNumber + ".png";

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImage);

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomImage1 = "images/dice" + randomNumber1 + ".png";

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImage1);

    if (randomNumber > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 1 Wins  🚩";
    }
    else if (randomNumber1 > randomNumber) {
        document.querySelector("h1").innerHTML = "Player 2 Wins  🚩"
    }
    else {
        document.querySelector("h1").innerHTML = "Draw 🏳️"

    }
});

$(".reset").click(function () {

    $(".img1").attr("src", "images/dice1.png");
    $(".img2").attr("src", "images/dice6.png")
    $("h1").text("Refresh Me");
});