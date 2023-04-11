"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Manipulating DOM

   About Me
   Author: Gabe Kidner
   Date: 7-4-23  

*/
document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").innerHTML = "Gabe";
document.getElementById("favorites").innerHTML = "Subject - Math, Color - Light Purple";
document.getElementById("hometown").innerHTML = "Layton, UT";

var listItems = document.querySelectorAll("li");
for(var i = 0; i < listItems.length; i++){
   listItems[i].setAttribute("class", "listitem");
   listItems[i].style.color = "red";
}

//Code Meant to insert the image
var myPic = document.createElement("img");
myPic.setAttribute("src", "images/me1.png");
myPic.setAttribute("id", "pic");
var head1 = document.getElementById("head");
head1.appendChild(myPic);

document.getElementById("pic").addEventListener("click", changePic);

function changePic(){
   var num = Math.floor(Math.random()*3)+1;
   document.getElementById("pic").setAttribute("src", "images/me" + num + ".png");
}

