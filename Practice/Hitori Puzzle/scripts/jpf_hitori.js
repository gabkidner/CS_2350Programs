"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment

   Author: Gabriel Kidner
   Date: 5-4-23  

   Global Variables
   ================
   
   allCells
      References the TD cells within the Hitori table grid.   
      
   Function List
   =============

   startUp()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   switchPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   findErrors()
      Highlights the errors in the Hitori puzzle in a red font.
      
   showSolution()
      Shows the solution to the Hitori puzzle
    
   checkSolution()
      Checks the current user's puzzle to verify whether it contains
      the complete and correct solution.

   drawHitori(numbers, blocks, rating)
      Returns a text string of the HTML code to
      display a Hitori puzzle table based on the contents of
      the numbers, blocks, and rating parameters.
	
*/

var allCells;
window.addEventListener("load", startUp);

function startUp(){
   document.getElementById("puzzleTitle").innerHTML = "Puzzle 1";
   document.getElementById("puzzle").innerHTML = drawHitori(hitori1Numbers, hitori1Blocks, hitori1Rating)

   var puzzleButtons = document.querySelectorAll(".puzzles");
   for(var i = 0; i < puzzleButtons.length; i++){
      puzzleButtons[i].addEventListener("click", switchPuzzle);
   }
   setupPuzzle();
   document.getElementById("check").addEventListener("click", findErrors);
   document.getElementById("solve").addEventListener("click", showSolution);
}

function switchPuzzle(e){
   if(confirm("You will lose all of your work on the puzzle! Continue?")){
      var puzzleID = e.target.id;
      document.getElementById("puzzleTitle").innerHTML = e.target.value;
      switch(puzzleID){
         case "puzzle1":
            document.getElementById("puzzle").innerHTML = drawHitori(hitori1Numbers, hitori1Blocks, hitori1Rating);
            break;
         case "puzzle2":
            document.getElementById("puzzle").innerHTML = drawHitori(hitori2Numbers, hitori2Blocks, hitori2Rating);
            break;
         case "puzzle3":
            document.getElementById("puzzle").innerHTML = drawHitori(hitori3Numbers, hitori3Blocks, hitori3Rating);
            break;
      }
      setupPuzzle();
   }
}

function setupPuzzle(){
   allCells = document.querySelectorAll("table#hitoriGrid td");
   for(var i = 0; i < allCells.length; i++){
      allCells[i].style.backgroundColor = "white";
      allCells[i].style.color = "black";
      allCells[i].style.borderRadius = "0";
      allCells[i].addEventListener("mousedown",
      function(){
         var cellBackground
         /*if(e.shiftKey){
            allCells[i].style.backgroundColor = "white";
            allCells[i].style.color = "black";
            allCells[i].style.borderRadius = "0";
         }
         else if(e.altKey){
            allCells[i].style.backgroundColor = "black";
            allCells[i].style.color = "white";
            allCells[i].style.borderRadius = "0";
         }
         else{*/
            allCells[i].style.backgroundColor = "red"//"rgb(101, 101, 101)"
            allCells[i].style.color = "white";
            allCells[i].style.borderRadius = "50%";
         //}
         //e.preventDefault();      
      });
      allCells[i].addEventListener("mouseover",
      function(e){
         if(e.shiftKey){
            allCells[i].style.cursor = "url(images/jpf_eraser.png), alias";
         }
         else if(e.altKey){
            allCells[i].style.cursor = "url(images/jpf_block.png), cell";
         }
         else{
            allCells[i].style.cursor = "url(images/jpf_circle.png), pointer";
         }
      });
      allCells[i].addEventListener("mouseup", checkSolution);
   }
}

function findErrors(){
   var square = document.querySelectorAll("table#hitoriGrid td.blocks");
   var circle = document.querySelectorAll("table#hitoriGrid td.circles");

   for(var i = 0; i < square.length; i++){
      if(square[i].style.backgroundColor == "rgb(101, 101, 101)"){
         filled[i].style.color = "red";
      }
   }
   for(var i = 0; i < circle.length; i++){
      if(circle[i].style.backgroundColor == "black"){
         filled[i].style.color = "red";
      }
   }
   setTimeout(
      function(){
         for(var i = 0; i < allCells.length; i++){
            if(allCells[i].style.color == "red"){
               puzzleCells[i].style.color = "white";
            }
         }
      }, 1000);
}


         
/* ================================================================= */

function checkSolution() {
   /* Set the initial solved state of the puzzle to true */
   var solved = true;

   /* Loop through the puzzle cells, exiting when an incorrect
      cell is found, setting the solved variable to false */

   for (var i = 0; i < allCells.length; i++) {
      var cellColor = allCells[i].style.backgroundColor;
      var cellClass = allCells[i].className;

      /* A cell is incorrect if it is in the block class and is not black
         or in the circle class and is not white */
      if ( (cellClass == "blocks" && cellColor !== "black") || 
           (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")) {
         solved = false;
         break;
      }
   }

   if (solved) alert("Congratulations! You solved the puzzle!");
}

function showSolution () {
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].style.color = "";
      allCells[i].style.backgroundColor = "";
      allCells[i].style.borderRadius = "";
   };   
}

function drawHitori(numbers, blocks, rating) {

   /* Initial HTML String for the Hitori Puzzle */
   var htmlString = "";

   /* numbers is a multidimensional array containing the
      Hitori numbers; blocks is a corresponding 
      multidimensional array containing the location of the
      blocks which are indicated by the # character.
      Non-blocking cells are indicated by a blank character.
  */

   /* Create a Web table with the id, hitoriGrid, containing
      the numeric values. Blocks cells have the class name,
      blocks. Non-blocking cells have the class name, circles
  */

   var totalRows = numbers.length;
   var totalCols = numbers[0].length;
   htmlString = "<table id='hitoriGrid'>";
   htmlString += "<caption>" + rating + "</caption>";
   

   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr>";

      for (var j = 0; j < totalCols; j++) {
         if (blocks[i][j] == "#") htmlString += "<td  class='blocks'>"
         else htmlString += "<td class='circles'>";

         htmlString += numbers[i][j];
         htmlString +="</td>";
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";
   return htmlString;
}