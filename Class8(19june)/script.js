function varTest(){
    var x=1;
    if(true){
        var x = 2;
        console.log(x);
        
    }
    console.log(x);
}
function letTest(){
    let y=1;
    if(true){
        let y=2;
        console.log(y);
    }
    console.log(y);
}
varTest();
letTest();

var name = prompt("What is your name?");
var a = name.slice(0,1);
var b = a.toUpperCase();
var c = name.slice(1,name.length);
var d = c.toLowerCase();
var e = console.log(b+d);
document.write(b+d);
// primitive datatypes
//NNSSBBU
// Non-primitive datatypes
// Object
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.

function main(){
    repeat(3);
 }
 function repeat(){
    move();
    turnLeft();
    move();
    turnRight();
    move();
    turnLeft();
    move();
    turnRight();
 }
 main();**/
//  function main(){
//     putBeeper();
//     repeatPut();
//     repeatPut();
//     repeatPut();
//     repeatLeft();
//     goingLeft();
//     goingLeft();
//     goingLeft();
//     upLeft();
//     putBeeper();
//     repeatPut();
//     repeatPut();
//     repeatPut();
//     repeatLeft();
//     goingLeft();
//     goingLeft();
//     goingLeft();
//     upLeft();
//     putBeeper();
//     repeatPut();
//     repeatPut();
//     repeatPut();
//     repeatLeft();
//     goingLeft();
//     goingLeft();
//     goingLeft();
//     upLeft();
//     putBeeper();
//     repeatPut();
//     repeatPut();
//     repeatPut();
//  }
//  function repeatPut() {
//     move();
//     move();
//     putBeeper();
//  }
//  function repeatLeft(){
//    turnLeft();
//    move();
//    turnLeft();
//  }
//  function goingLeft(){
//    move();
//    putBeeper();
//    move();
//  }
//  function upLeft(){
//     turnRight();
//     move();
//     turnRight();
//  }
 