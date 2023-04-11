"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Manipulating DOM

   Collection
   Author: Gabe Kidner
   Date: 8-4-23  

*/

var books = [
    {title: 'Uglies',
    genre: 'Science Fiction',
    read: true  
    },
    {title: 'Enders Game',
    genre: 'Science Fiction',
    read: false
    },
    {title: 'Scythe',
    genre: 'Dystopian',
    read: true
    },
    {title: 'The Hobbit',
    genre: 'Fantasy',
    read: true},
    {title: 'Anthem',
    genre: 'Science Fiction',
    read: false
    }];
    
var collecTable = document.createElement("table");
var headRow = document.createElement("tr")
var head1 = document.createElement("th");
var head2 = document.createElement("th");
var head3 = document.createElement("th");
head1.innerHTML = "Title";
head2.innerHTML = "Genre";
head3.innerHTML = "Read";
headRow.appendChild(head1);
headRow.appendChild(head2);
headRow.appendChild(head3);
collecTable.appendChild(headRow);

for(var i = 0; i < books.length; i++){
    var row = document.createElement("tr");
    collecTable.appendChild(row);
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    cell1.innerHTML = books[i].title;
    cell2.innerHTML = books[i].genre;
    if(books[i].read == true){
        cell3.innerHTML = "<img src='images/check.png' alt=''>";
    }
    else{
        cell3.innerHTML = "<img src='images/x.png' alt=''>";
    }
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

}
document.body.appendChild(collecTable);
var link = document.createElement("a");
link.setAttribute("href", "index.html");
link.textContent = "About Me";
document.body.appendChild(link);

var tableStyles = document.createElement("style");
document.head.appendChild(tableStyles);
document.styleSheets[document.styleSheets.length-1].
insertRule(
    "table{\
        font-family: 'Times New Roman', Times, serif;\
        width: 70%;\
        margin-left: auto;\
        margin-right: auto;\
        margin-top: 5%;\
        border-collapse: collapse;\
        border: solid 2px black;\
        background-color: white;\
    }",0);

document.styleSheets[document.styleSheets.length-1].
insertRule(
    "table th{\
        background-color: gray;\
    }",1);

document.styleSheets[document.styleSheets.length-1].
insertRule(
    "table tr th{\
        text-align: center;\
        padding: 5px;\
        width: 50%;\
        border: solid 2px black;\
    }",2)

document.styleSheets[document.styleSheets.length-1].
insertRule(
    "table td{\
        border: solid 2px black;\
        background-color: #d9d9d9;\
    }",3);