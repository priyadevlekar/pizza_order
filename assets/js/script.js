/* Author: 

*/

"use strict";
window.onload= loadDoc();

var li, img_div, img, order, h4,p;
var pizza_type = document.getElementById("types");
var nonveg_type = document.getElementById("types-nonveg");
  function loadDoc() 
  {
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {   
        var record =JSON.parse(this.responseText);
        call_record(record);
        console.log(record);
      }
    }
    xobj.open('GET', 'pizza.json', true);
    xobj.send();
  } 

    function call_record(record){
        for (var i = 0; i < 3; i++){
      	  li = document.createElement('li');
          img_div = document.createElement('div');
          li.setAttribute('class','child-list');
          li.setAttribute('data-id', record.pizzas['veg_pizza'][i].id);
          img=document.createElement('img');
          order=document.createElement('a');
          order.setAttribute('href','#FIXME');
          order.setAttribute('title','Order Now');
          h4 =document.createElement('h4');
          p = document.createElement('p');
          
          img.src=record.pizzas['veg_pizza'][i].img;

          h4.innerHTML = record.pizzas['veg_pizza'][i].pizza_name;
           
          img_div.appendChild(img);
          p.innerHTML = record.pizzas['veg_pizza'][i].descrition;
          li.appendChild(img_div);
          li.appendChild(h4);
          li.appendChild(p);
          li.appendChild(order);
          
          order.innerHTML = "order Now";
          pizza_type.appendChild(li);
        }
         
         for (var i = 0; i < 3; i++){
          li = document.createElement('li');
          img_div = document.createElement('div');
          li.setAttribute('class','child-list');
          li.setAttribute('data-id', record.pizzas['nonVeg_pizza'][i].id);
          img=document.createElement('img');
          order=document.createElement('a');
          order.setAttribute('href','#FIXME');
          order.setAttribute('title','Order Now');
          h4 =document.createElement('h4');
          p = document.createElement('p');
          
          img.src=record.pizzas['nonVeg_pizza'][i].img;

          h4.innerHTML = record.pizzas['nonVeg_pizza'][i].pizza_name;
           
          img_div.appendChild(img);
          p.innerHTML = record.pizzas['nonVeg_pizza'][i].descrition;
          li.appendChild(img_div);
          li.appendChild(h4);
          li.appendChild(p);
          li.appendChild(order);
          
          order.innerHTML = "order Now";
          nonveg_type.appendChild(li);
        }        
         
    }          

        