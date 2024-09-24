document.firstElementChild.style.backgroundColor = "plum"

document.createElement("p")
let para_innerText = "This is a paragraph";
document.write(para_innerText);

// document.body.childNodes[1].innerText = "This is not Hello world";
// console.log(document.body.childNodes[1]);

let button =  document.getElementById("button");
console.log(button);

let listing = document.getElementsByClassName("list");
console.log(listing);

let tag_Name = document.getElementsByTagName("li");
console.log(tag_Name);

document.querySelector("h1").style.color ="Black";

// document.querySelectorAll(".list").style.color = "red";//Doubt
let its_heading = document.querySelector(".heading");
console.log(its_heading);

let first_child=document.getElementById("myId");
console.log(document.getElementById("myId").firstChild);

let last_Child = document.getElementsByClassName("list");
console.log(document.body.lastChild);

console.log(document.querySelector(".list").children);

document.children;

let counting_no = document.querySelector("div");
console.dir(counting_no);

//tagName,inneretext,innerHtml,textcontent  

// let extra = document.innerText

let link = document.querySelector("a").setAttribute("href" ,"https://developer.mozilla.org");
console.log(link);


//Homework

// let heading_1 = document.querySelector("h1").innerHTML = "Hello World";
// console.log(heading_1);

// let heading_2 = document.querySelector("h1").textContent = "Hello bro"
// console.log(heading_2);