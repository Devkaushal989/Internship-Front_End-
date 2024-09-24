var a = prompt("What is your age");
function agecalc(age){
    let years =age-80;
    let months = years/12;
    let days = years+365;
    let hours =months*24;
    console.log("You have" + years + " years"+ months + " Months and " + days + " days" + hours + " Hours are left" );
}
agecalc(a);