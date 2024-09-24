// prompt("Enter your name");
// prompt("Enter your friends name");

// let friendship = Math.random() * 100;0
//  var floor = Math.floor(friendship);
// alert("Your friendship score is: " + floor + "%");

// var w = prompt("Enter the weight");
// var h = prompt("Enter the height");

// var bmi = w*1000/(Math.pow(h,2)*100);
// var bmi_1 = bmi *100;
// var bmi2 = Math.floor(bmi_1)
// alert("Your BMI is: " + bmi2);
function bmicalculator(weight,height){
    let bmic = weight / (Math.pow(height,2));
    return bmic;
}
let bmic2 = bmicalculator(67,3.6);
let floor =Math.floor(bmic2);
alert("Your bmi is: " + floor);
if (floor<18) {
   alert("You are Under weight");
}
if(floor>18 && floor<24){
    alert("You are Normal Weight");
}
else if (floor>24){
    alert("You are overweight");
}