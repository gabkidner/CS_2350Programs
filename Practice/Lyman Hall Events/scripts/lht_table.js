"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Gabe Kidner
   Date: 21-3-23  

	
*/

var thisDay = new Date("August 30, 2018");
var tableHTML = "<table id = 'eventTable'> <caption>Upcoming Events</caption> <tr><th>Date</th><th>Event</th><th>Price</th></tr>"
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);
for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
   var description = eventDescriptions[i];
   var price = eventPrices[i];
   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr><td>" + eventDay + " @ " + eventTime + "</td>";
      tableHTML += "<td>" + description + "</td>";
      tableHTML += "<td>" + price + "</td></tr>";
   }
}
document.getElementById("eventList").innerHTML = tableHTML;
