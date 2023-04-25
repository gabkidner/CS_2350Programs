"use strict";
/*
    CS 2350 "JavaScript Final"
    JavaScript File
    
    Author: Gabe Kidner
    Date: 17-4-23
    
    Filename: game.js
    */
   

    var tableStyle = document.createElement("style");
    document.head.appendChild(tableStyle);
    document.styleSheets[document.styleSheets.length-1].insertRule("h1, h2, div#startForm{\
        text-align: center;\
    }", 0);
   var flipped = 0;
   var matches = 0;
   var guesses = 0;
   var clickIDs = new Array;
   var clickValues = new Array;
   
   document.getElementById("startButton").addEventListener("click", 
   function(){
        var pairs = document.getElementById("numSymbols").value;
        if(pairs > 8){
            pairs = 8;
        }
        var symbols = "+@#$~*&^";
        document.getElementById("startForm").hidden = true;
        genBoard(pairs, symbols);
        coverBoard();
        var cardArray = document.getElementsByClassName("card");
        for(var i = 0; i < cardArray.length; i++){
            var vlu = cardArray[i].value;
            cardArray[i].addEventListener("click", flip);
        }
    });
    
function genBoard(pairs, symbols){
    var used = new Array;
    var cards = new Array;
    for(var i = 0; i < pairs; i++){
        used.push(0);
    }
    var cardNum = pairs*2;
    var rowNum = 2;
    var colNum = pairs;
    var cardTable = document.createElement("div");
    cardTable.setAttribute("id", "symbolCards");
    document.getElementById("game").appendChild(cardTable);
    if(Number.isInteger(Math.sqrt(cardNum))){
        rowNum = Math.sqrt(cardNum);
        colNum = Math.sqrt(cardNum);
    }
    var tableHTML = "<table>";
    var curr = 0;
    for(var r = 0; r < rowNum; r++){
        tableHTML += "<tr>";
        for(var c = 0; c < colNum; c++){
            do{
                var ndx = Math.floor(Math.random()*pairs);
            }while(used[ndx] == 2);
            tableHTML += "<td class = 'card' value = '" + symbols[ndx] + "' id = '" + curr + "'></td>";
            curr++;
            cards.push(symbols[ndx]);
            used[ndx] += 1;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>"
    cardTable.innerHTML = tableHTML;
}   

function coverBoard(){
    var tableStyle = document.createElement("style");
    document.head.appendChild(tableStyle);
    document.styleSheets[document.styleSheets.length-1].
    insertRule(
        "table td{\
            width: 40px;\
            height: 60px;\
            text-align: center;\
            background-color: gray;\
        }", 0);
        document.styleSheets[document.styleSheets.length-1].
        insertRule("table{\
            margin-right: auto;\
            margin-left: auto;\
            border-style: solid;\
            border-width: 5px;\
            border-color: black;\
    }", 1);
}

function flip(e){
    if(flipped < 2){
        var cardValue = e.target.getAttribute("value");
        if(flipped == 0){
            clickValues.push(cardValue);
            clickIDs.push(e.target.getAttribute("id"));
        }
        else if(flipped == 1){
            clickValues.push(cardValue);
            clickIDs.push(e.target.getAttribute("id"));
            if(clickIDs[0] == clickIDs[1]){
                flipped--;
                clickIDs.pop();
                clickValues.pop();
            }
            else{
                clickIDs.pop();
                clickIDs.pop();
                guesses++;
                setTimeout(flipBack, 600);
            }
        }
        e.target.style.background = "white";
        e.target.style.border = "1px solid black";
        e.target.textContent = cardValue;
        flipped++;
    }
}

function flipBack(){
    var cardArray = document.getElementsByClassName("card");
    if(clickValues[0] == clickValues[1]){
        matches++;
        for(var i = 0; i < cardArray.length; i++){
            if(cardArray[i].style.background == "white"){
                cardArray[i].textContent = "";
                cardArray[i].style.border = "0px solid black";
            }
        }
    }
    else{
        for(var i = 0; i < cardArray.length; i++){
            if(cardArray[i].style.border == "1px solid black"){
                cardArray[i].style.background = "gray";
                cardArray[i].style.border = "0px solid black";
                cardArray[i].textContent = "";
            }
        }
    }
    clickValues.pop();
    clickValues.pop();
    flipped = 0;
    var allCards = document.getElementsByClassName("card");
    var flipAmount = 0;
    for(var i = 0; i < allCards.length; i++){
        if(allCards[i].style.background == "white"){
            flipAmount++;
        }
    }
    if(flipAmount == allCards.length && matches == allCards.length/2){
        document.getElementById("symbolCards").innerHTML = "<h2>Thanks For Playing</h2>";
    }
}