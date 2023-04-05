"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Gabriel Kidner
   Date: 4-4-23

   Filename: bc_switch.js
   
   setupStyles()
   Function to set up the style sheet switcher and insert
   form buttons to allow the user to switch between web
   view and page view
   
*/

window.addEventListener("load", setupStyles);

function setupStyles(){
   //create a link element for the page view styles
   var pageStyle = document.createElement("link");
   pageStyle.setAttribute("href", "styles/bc_page.css");
   pageStyle.setAttribute("rel", "stylesheet");
   pageStyle.setAttribute("disabled", "disabled");
   
   //Append the link element to the document head
   document.head.appendChild(pageStyle);
   pageStyle.disabled = true;

   //insert buttons for the style switch
   var buttonDiv = document.createElement("div");
   buttonDiv.setAttribute("id", "styleButtons");
   
   var webButton = document.createElement("input");
   webButton.setAttribute("type", "button");
   webButton.setAttribute("value", "Web View");

   var pageView = document.createElement("input");
   pageView.setAttribute("type", "button");
   pageView.setAttribute("value", "Page View");

   buttonDiv.appendChild(webButton);
   buttonDiv.appendChild(pageView);

   document.body.insertBefore(buttonDiv, document.body.firstChild);
   
   //append an embedded stylesheet to the document head
   var buttonStyles = document.createElement("style");
   document.head.appendChild(buttonStyles);

   //add style rules to the embedded stylesheet
   document.styleSheets[document.styleSheets.length-1].
   insertRule(
      "div#styleButtons {\
         position: fixed;\
      }", 0);
   
   document.styleSheets[document.styleSheets.length-1].
   insertRule(
      "div#styleButtons input{\
         background-color: rgba(63, 94, 186, 0.6);\
         border: 3px solid rgba(0, 24, 123, 0.6);\
         border-radius: 50%;\
         cursor: pointer;\
         color: white;\
         display: inline-block;\
         font-size: 1.2em;\
         height: 60px;\
         margin: 5px 10px;\
         width: 100px;\
      }", 1); 
   document.styleSheets[document.styleSheets.length-1].
   insertRule(
      "@media print {\
         div#styleButtons{\
            display: none\
         } \
      }", 2);

      //turn the page view style off and on
      webButton.onclick = function(){
         pageStyle.disabled = true;
      }

      pageView.onclick = function(){
         pageStyle.disabled = false;
      };
}