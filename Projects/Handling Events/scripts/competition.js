"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Handiling Forms

   JavaScript Script
   Author: Gabe Kidner
   Date: 11-4-23  

*/

window.addEventListener("load", function(){
    calcTotal();
    document.getElementById("weight").addEventListener("input", calcKennel);
    this.document.getElementById("days").addEventListener("input", calcBPrice);
    var checks = this.document.querySelectorAll("input[type='checkbox']");
    for(var i = 0; i < checks.length; i++){
        checks[i].addEventListener("click", calcTotal);
    }
    this.document.getElementById("singAdd").hidden = true;
    this.document.getElementById("trickAdd").hidden = true;
    this.document.getElementById("cuteAdd").hidden = true;
})

function calcKennel(){
    var pWeight = document.getElementById("weight").value;
    var kSize = document.getElementById("size");
    if(pWeight === NaN || pWeight == ""){
        kSize.value = ""
    }
    else if(pWeight <= 4){
        kSize.value = "mini";
    }
    else if(pWeight > 4 && pWeight <= 12){
        kSize.value = "small";
    }
    else if(pWeight > 12 && pWeight <= 50){
        kSize.value = "medium";
    }
    else{
        kSize.value = "large";
    }
    calcTotal();
}

function calcBPrice(){
    var dayNum = document.getElementById("days").value;
    var bCost = document.getElementById("boardingFee");
    if(isNaN(dayNum)){
        document.getElementById("days").value = 0;
    }
    else if(dayNum == ""){  
        bCost.value = "0.00";
    }
    else if(/\d/.test(dayNum)){
        document.getElementById("days").value = parseInt(dayNum);
        bCost.value = (parseInt(dayNum)*19.99).toFixed(2);
    }
    calcTotal();
}

function calcTotal(){
    var regCost = 0;
    var numEvents = 0;
    var boardCost = document.getElementById("boardingFee").value;
    if(boardCost == ""){
        boardCost = 0;
    }
    else{
        boardCost = parseFloat(boardCost);
    }
    
    //Calculate numEvents
    var singBox = document.querySelector('input[name="sing"]:checked');
    if(singBox === null){
        document.getElementById("singAdd").hidden = true;
        document.getElementById("singAdd").style.display = "none";
        numEvents += 0;
    }
    else if(singBox.value == "on"){
        document.getElementById("singAdd").hidden = false;
        document.getElementById("singAdd").style.display = "block";
        numEvents += 1;
    }
    var cuteBox = document.querySelector('input[name="cute"]:checked');
    if(cuteBox === null){
        document.getElementById("cuteAdd").hidden = true;
        document.getElementById("cuteAdd").style.display = "none";
        numEvents += 0;
    }
    else if(cuteBox.value == "on"){
        document.getElementById("cuteAdd").hidden = false;
        document.getElementById("cuteAdd").style.display = "block";
        numEvents += 1;
    }
    var trickBox = document.querySelector('input[name="trick"]:checked');
    if(trickBox === null){
        document.getElementById("trickAdd").hidden = true;
        document.getElementById("trickAdd").style.display = "none";
        numEvents += 0;
    }
    else if(trickBox.value == "on"){
        document.getElementById("trickAdd").hidden = false;
        document.getElementById("trickAdd").style.display = "block";
        numEvents += 1;
    }

    regCost = numEvents*120;
    document.getElementById("boardingCost").value = boardCost.toFixed(2);
    document.getElementById("registrationCost").value = regCost.toFixed(2);
    document.getElementById("totalCost").value = (regCost + boardCost).toFixed(2);
}