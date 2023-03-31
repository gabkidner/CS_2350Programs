"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Array Project

   Array Script
   Author: Gabe Kidner
   Date: 22-3-23  

*/

//Create the books table
var books = ["Scythe", "Uglies", "A Christmas Carol", "Lord of the Flies", "Harry Potter", "The Hobbit", "The Outsiders"];
var bookAuthors = ["Neal Shusterman", "Scott Westerfield", "Charles Dickens", "William Golding", "J. K. Rowling", "J. R. R. Tolkien", "S. E. Hinton"];
var bookTable = "<table id><tr><th colspan = '2'>Name</th><th>Author</th></tr>";
for(var i = 0; i < books.length; i++){
    bookTable += "<tr>";
    bookTable += "<td colspan = '2'>" + books[i] + "</td>";
    bookTable += "<td colspan = '2'>" + bookAuthors[i] + "</td>";
    bookTable += "</tr>";
}
bookTable += "</table>";
document.getElementById("books").innerHTML = bookTable;

//Create the months array
var months = [];
months.push("January", "February", "March");
months.push("April", "May", "June");
months.push("July", "August", "September");
months.push("October", "November", "December");

//Make unordered list of all months
var monthsHTML = "<ul>";
for(var i = 0; i < months.length; i++){
    monthsHTML += "<li>";
    monthsHTML += months[i];
    monthsHTML += "</li>";
}
document.getElementById("allMonths").innerHTML = monthsHTML;

//Make list of all J months and list for other months
var jMonths = "<ul>";
var otherMonths = "<ul>";
for(var i = 0; i < months.length; i++){
    var month = months[i];
    if(month[0] == 'J'){
        jMonths += "<li>" + months[i] + "</li>";
    }
    else{
        otherMonths += "<li>" + months[i] + "</li>"; 
    }
}
document.getElementById("jMonths").innerHTML = jMonths;
document.getElementById("nonJMonths").innerHTML = otherMonths;

//Filter months with r
var filterMonths = "<ul>";
for(var i = 0; i < months.length; i++){
    var month = months[i];
    for(var l = 0; l < month.length; l++){
        if(month[l] == 'r'){
            filterMonths += "<li>" + month + "</li>";
            break;
        }
    }
}
document.getElementById("filterMonths").innerHTML = filterMonths;

//Create and print the two random arrays
var words = ["boom", "noble", "anniversary", "bell", "betray", "railroad", "corpse"];
var numbers = [-10, -25, 13, 59, -71, 2, 56];
var wordString = "";
var numberString = "";
for(var i = 0; i < words.length; i++){
    wordString += words[i];
    numberString += numbers[i];
    if(i != (words.length-1)){
        wordString += ", ";
        numberString += ", ";
    }
}
var arrayHTML = "<p>" + wordString + "</p>";
arrayHTML += "<p>" + numberString + "</p>";
document.getElementById("twoArrays").innerHTML = arrayHTML; 

//Sort and Print the arrays
var sortedWords = words.sort();
var sortedNums = numbers.sort();
var wordString = "";
var numberString = "";
for(var i = 0; i < words.length; i++){
    wordString += sortedWords[i];
    numberString += sortedNums[i];
    if(i != (words.length-1)){
        wordString += ", ";
        numberString += ", ";
    }
}
arrayHTML = "<p>" + wordString + "</p>";
arrayHTML += "<p>" + numberString + "</p>";
document.getElementById("sortedArrays").innerHTML = arrayHTML; 

//Sorting the numbers
numbers.sort(function(a, b){return a - b});
for(var i = 0; i < words.length; i++){
    numberString += numbers[i];
    if(i != (words.length-1)){
        numberString += ", ";
    }
}
document.getElementById("sortedNumberArray").innerHTML = "<p>" + numberString + "</p>"; 

//Making footer
var lastMod = document.lastModified;
var curDate = new Date();
var string = "<h4>Last Modified: " + lastMod.toString() + "</h4>";
string += "<h4>Current Date: " + curDate.toLocaleDateString() + "</h4>";
document.getElementById("dates").innerHTML = string;