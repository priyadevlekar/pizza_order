/* Author: 

*/

"use strict";
window.onload= loadDoc();

var pizza_type = document.getElementById("types");
  function loadDoc() 
  {
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        var record =JSON.parse(this.responseText);
        console.log(record);
        call_record(record);
       
      }
    }
    xobj.open('GET', 'pizzas.json', true);
    xobj.send();
  } 

    function call_record(record){
       console.log(record.veg_pizza.length)
        for (var i = 0; i < 6; i++){

          console.log(record.veg_pizza[i].pizza_name);
        	 var li = document.createElement('li');
           var img_div = document.createElement('div');
            li.setAttribute('class','child-list');
            li.setAttribute('data-id',record.veg_pizza[i].id);
            var img=document.createElement('img');
            var order=document.createElement('a');
            order.setAttribute('href','#FIXME');
            order.setAttribute('title','Order Now');
            var h4 =document.createElement('h4');
            var p = document.createElement('p');
            
            img.src=record.veg_pizza[i].img;

            h4.innerHTML = record.veg_pizza[i].pizza_name;
            console.log(h4);
             img_div.appendChild(img);
            p.innerHTML = record.veg_pizza[i].descrition;
            li.appendChild(img_div);
            li.appendChild(h4);
            li.appendChild(p);
            li.appendChild(order);
            
            order.innerHTML = "order Now";
            pizza_type.appendChild(li);
        }
                 
            // console.log(record.data[i].id);
    }
