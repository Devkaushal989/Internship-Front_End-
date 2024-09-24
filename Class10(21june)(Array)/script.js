// let arr = [2,3,4];
// arr.push(1)
// console.log(arr);
let arr = [];
let num = arr.push(1);
console.log(num);
function name_change() {
    if (arr % 3 === 0 && arr % 5 === 0) {
        arr.push("fizzbuzz");
    }
    else if (arr % 3 === 0) {
        arr.push("fizz");
    }
    else if (arr % 5 === 0) {
        arr.push("buzz");
    }
    else {
        arr.push(num);
    }
}
console.log(name_change);
num++;

var output = [];
var count =1;

function 