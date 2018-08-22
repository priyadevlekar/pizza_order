/* Author: 

*/

"use strict";
window.onload= loadDoc();

var li, img_div, img, order, h4,p;
var pizza_type = document.getElementById("types");
var nonveg_type = document.getElementById("types-nonveg");
var item = document.querySelector(".active").innerHTML;
console.log(item);

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
    xobj.open('GET', 'pizzas.json', true);
    xobj.send();
  } 

    function call_record(record){
      
      
      if(item =='veg pizza' || item =='all types'){


          for (var i = 0; i < record.pizzas['veg_pizza'].length; i++){
          if(item=="all types" && i == 3){
            break;
          }
          else {

            li = document.createElement('li');
              img_div = document.createElement('div');
              li.setAttribute('class','child-list');
              li.setAttribute('data-id', record.pizzas['veg_pizza'][i].id);
              img=document.createElement('img');
              reg_order=document.createElement('a');
              med_order = document.createElement('a');
              lar_order =document.createElement('a');

              reg_order.setAttribute('href','#FIXME');
              reg_order.setAttribute('data-type','reg')
              med_order.setAttribute('href','#FIXME');
              med_order.setAttribute('data-type','med')
              lar_order.setAttribute('href','#FIXME');
              lar_order.setAttribute('data-type','lar');

              reg_order.classList='order';
              med_order.classList='order';
              lar_order.classList='order';

              reg_order.innerHTML = 'Regular pizza';
              med_order.innerHTML = 'medium pizza';
              lar_order.innerHTML = 'large pizza';

              var span_reg = document.createElement('span');
              var span_med = document.createElement('span');
              var span_lar = document.createElement('span');
              span_reg.innerHTML = record.pizzas['veg_pizza'][i].regular_price;
              span_med.innerHTML = record.pizzas['veg_pizza'][i].medium_price;
              span_lar.innerHTML = record.pizzas['veg_pizza'][i].large_price;

              reg_order.appendChild(span_reg);
              med_order.appendChild(span_med);
              lar_order.appendChild(span_lar);
              reg_order.setAttribute('data-id',record.pizzas['veg_pizza'][i].id);
              reg_order.setAttribute('title','Order Now');
              med_order.setAttribute('data-id',record.pizzas['veg_pizza'][i].id);
              med_order.setAttribute('title','Order Now');
              lar_order.setAttribute('data-id',record.pizzas['veg_pizza'][i].id);
              lar_order.setAttribute('title','Order Now');
              h4 =document.createElement('h4');
              p = document.createElement('p');
              
              img.src=record.pizzas['veg_pizza'][i].img;

              h4.innerHTML = record.pizzas['veg_pizza'][i].pizza_name;
               
              img_div.appendChild(img);
              p.innerHTML = record.pizzas['veg_pizza'][i].descrition;
              li.appendChild(img_div);
              li.appendChild(h4);
              li.appendChild(p);
              li.appendChild(reg_order);
              li.appendChild(med_order);
              li.appendChild(lar_order);

            pizza_type.appendChild(li);
        }
      }   
      }
      if(item =='non-veg pizza' || item =='all types'){
        for (var i = 0; i < record.pizzas['nonVeg_pizza'].length; i++){
           if(item=="all types" && i == 3){
            break;
          }
          else {
            li = document.createElement('li');
            img_div = document.createElement('div');
            li.setAttribute('class','child-list');
            li.setAttribute('data-id', record.pizzas['nonVeg_pizza'][i].id);
            img=document.createElement('img');

              reg_order=document.createElement('a');
              med_order = document.createElement('a');
              lar_order =document.createElement('a');

              reg_order.setAttribute('href','#FIXME');
              reg_order.setAttribute('data-type','reg')
              med_order.setAttribute('href','#FIXME');
              med_order.setAttribute('data-type','med')
              lar_order.setAttribute('href','#FIXME');
              lar_order.setAttribute('data-type','lar');

              reg_order.classList='order';
              med_order.classList='order';
              lar_order.classList='order';

              reg_order.innerHTML = 'Regular pizza';
              med_order.innerHTML = 'medium pizza';
              lar_order.innerHTML = 'large pizza';

              var span_reg = document.createElement('span');
              var span_med = document.createElement('span');
              var span_lar = document.createElement('span');
              span_reg.innerHTML = record.pizzas['nonVeg_pizza'][i].regular_price;
              span_med.innerHTML = record.pizzas['nonVeg_pizza'][i].medium_price;
              span_lar.innerHTML = record.pizzas['nonVeg_pizza'][i].large_price;

              reg_order.appendChild(span_reg);
              med_order.appendChild(span_med);
              lar_order.appendChild(span_lar);

              reg_order.appendChild(span_reg);
              med_order.appendChild(span_med);
              lar_order.appendChild(span_lar);
              reg_order.setAttribute('data-id',record.pizzas['nonVeg_pizza'][i].id);
              reg_order.setAttribute('title','Order Now');
              med_order.setAttribute('data-id',record.pizzas['nonVeg_pizza'][i].id);
              med_order.setAttribute('title','Order Now');
              lar_order.setAttribute('data-id',record.pizzas['nonVeg_pizza'][i].id);
              lar_order.setAttribute('title','Order Now');

            h4 =document.createElement('h4');
            p = document.createElement('p');
            
            img.src=record.pizzas['nonVeg_pizza'][i].img;

            h4.innerHTML = record.pizzas['nonVeg_pizza'][i].pizza_name;
             
            img_div.appendChild(img);
            p.innerHTML = record.pizzas['nonVeg_pizza'][i].descrition;
            li.appendChild(img_div);
            li.appendChild(h4);
            li.appendChild(p);
            li.appendChild(reg_order);
            li.appendChild(med_order);
            li.appendChild(lar_order);
            nonveg_type.appendChild(li);
        }        
      }
      } 
      var order_btn = document.getElementsByClassName('order');
      var a=Array.from(order_btn);
      console.log(order_btn);

      a.forEach(function(element){
        element.addEventListener('click', function(){ order_pizza(this) });
      });
    }   

     function order_pizza(list){
     var id=list.getAttribute('data-id');
      var type= list.getAttribute('data-type')
        var url='order.html?name=' + encodeURIComponent(id)+ '&type=' +encodeURIComponent(type);
        window.location.assign(url);
      }
