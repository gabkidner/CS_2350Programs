"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Gabe Kidner
   Date: 11-4-23  
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

window.addEventListener("load", function(){
   var cartTable = document.forms.cart;
   calcCart();
   cartTable.elements.modelQty.onchange = calcCart;
   this.document.getElementById("modelQty").addEventListener("onchange", calcCart);
   var shipButtons = document.querySelectorAll('input[name = "shipping"]');
   for(var i = 0; i < shipButtons.length; i++){
      shipButtons[i].addEventListener("click", calcCart);
   }
});

function calcCart(){
   var cartForm = document.forms.cart;
   var orderCost = document.getElementById("modelCost").value * document.getElementById("modelQty").value;
   document.getElementById("orderCost").value = formatUSCurrency(orderCost);

   var shipCost = document.querySelector('input[name = "shipping"]:checked').value * document.getElementById("modelQty").value;
   document.getElementById("shippingCost").value = formatNumber(shipCost, 2);
   document.getElementById("subTotal").value = formatNumber(orderCost + shipCost, 2);
   
   var salesTax = 0.05 * (orderCost + shipCost);
   document.getElementById("salesTax").value = formatNumber(salesTax, 2);
   document.getElementById("cartTotal").value = formatUSCurrency(orderCost + shipCost + salesTax);
   
   cartForm.elements.shippingType.value = document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;
}

/*--------------------------------------------------------------------------------*/
function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
