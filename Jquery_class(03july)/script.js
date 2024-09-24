// alert("Hello world")
// $("button").css("color","blue")
// $("h1").css("color","red");

$("a").attr("href", "https://fast.com");

$("h1").addClass("heading");
// $("h1").removeClass("heading");

$("button").click(function () {
    $("h1").css("color", "aqua");
})

$("h1").click(function () {
    $("button").css("color", "rgb(53,187,53)"); 
})

$(".red").click(function () {
    $("body").css("background-color", "red");
    $(".red").css("color", "red");
})
$(".blue").click(function () {
    $("body").css("background-color", "blue");
    $(".blue").css("color", "blue");
})
$(".plum").click(function () {
    $("body").css("background-color", "plum");
    $(".plum").css("color", "plum");
})
$(".black").click(function () {
    $("body").css("background-color", "black");
    $(".black").css("color", "black");
})
$(".brown").click(function () {
    $("body").css("background-color", "brown");
    $(".brown").css("color", "brown");
})

$("button").click(function (red, blue, plum, black, brown) {
    //   let click_button = 
})