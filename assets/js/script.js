/* Author: 

*/

"use strict";
// on window load json file loaded using this function and pass to another variable to create list of pizza
window.onload = loadDoc();

var li, img_div, img, reg_order, med_order, lar_order, h4,p,add_reg,add_med,add_lar, i;
var pizza_type = document.getElementById("types");
var nonveg_type = document.getElementById("types-nonveg");
var item = document.querySelector(".active").innerHTML;


  function loadDoc() 
  {
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {   
        var record =JSON.parse(this.responseText);
        call_record(record);
      }
    }
    xobj.open('GET', 'pizzas.json', true);
    xobj.send();
  } 

// this function is used to create list of pizza dynamically for all page.
  function call_record(record){
    // this create veg type of pizza
    if(item =='veg pizza' || item =='all types'){
      for (i = 0; i < record.pizzas['veg_pizza'].length; i++){
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

          add_reg=document.createElement('a');
          add_med = document.createElement('a');
          add_lar =document.createElement('a');

          reg_order.setAttribute('href','#FIXME');
          reg_order.setAttribute('data-type','reg');
          med_order.setAttribute('href','#FIXME');
          med_order.setAttribute('data-type','med')
          lar_order.setAttribute('href','#FIXME');
          lar_order.setAttribute('data-type','lar');

          add_reg.setAttribute('href','#FIXME');
          add_reg.setAttribute('data-type','reg');
          add_med.setAttribute('href','#FIXME');
          add_med.setAttribute('data-type','med');
          add_lar.setAttribute('href','#FIXME');
          add_lar.setAttribute('data-type','lar');

          reg_order.classList='order';
          med_order.classList='order';
          lar_order.classList='order';
          add_reg.classList='add-card';
          add_med.classList='add-card';
          add_lar.classList='add-card';

          reg_order.innerHTML = 'Regular pizza';
          med_order.innerHTML = 'medium pizza';
          lar_order.innerHTML = 'large pizza';

          add_reg.innerHTML = '+';
          add_med.innerHTML = '+';
          add_lar.innerHTML = '+';

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

          add_reg.setAttribute('data-id',record.pizzas['veg_pizza'][i].id);
          add_med.setAttribute('data-id',record.pizzas['veg_pizza'][i].id);
          add_lar.setAttribute('data-id',record.pizzas['veg_pizza'][i].id);
          add_reg.setAttribute('title','Add To Card');
          add_med.setAttribute('title','Add To Card');
          add_lar.setAttribute('title','Add To Card');
          
          img.src=record.pizzas['veg_pizza'][i].img;

          h4.innerHTML = record.pizzas['veg_pizza'][i].pizza_name;
           
          img_div.appendChild(img);
          p.innerHTML = record.pizzas['veg_pizza'][i].descrition;
          li.appendChild(img_div);
          li.appendChild(h4);
          li.appendChild(p);
          li.appendChild(reg_order);
          li.appendChild(add_reg);
          li.appendChild(med_order);
          li.appendChild(add_med);
          li.appendChild(lar_order);
          li.appendChild(add_lar);
          pizza_type.appendChild(li);
        }
      }   
    }
    // this create non veg type of pizza
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

            add_reg=document.createElement('a');
            add_med = document.createElement('a');
            add_lar =document.createElement('a');

            reg_order.setAttribute('href','#FIXME');
            reg_order.setAttribute('data-type','reg');
            med_order.setAttribute('href','#FIXME');
            med_order.setAttribute('data-type','med')
            lar_order.setAttribute('href','#FIXME');
            lar_order.setAttribute('data-type','lar');

            add_reg.setAttribute('href','#FIXME');
            add_reg.setAttribute('data-type','reg');
            add_med.setAttribute('href','#FIXME');
            add_med.setAttribute('data-type','med');
            add_lar.setAttribute('href','#FIXME');
            add_lar.setAttribute('data-type','lar');

            reg_order.classList='order';
            med_order.classList='order';
            lar_order.classList='order';
            add_reg.classList='add-card';
            add_med.classList='add-card';
            add_lar.classList='add-card';

            reg_order.innerHTML = 'Regular pizza';
            med_order.innerHTML = 'medium pizza';
            lar_order.innerHTML = 'large pizza';

            add_reg.innerHTML = '+';
            add_med.innerHTML = '+';
            add_lar.innerHTML = '+';

            var span_reg = document.createElement('span');
            var span_med = document.createElement('span');
            var span_lar = document.createElement('span');
            span_reg.innerHTML = record.pizzas['nonVeg_pizza'][i].regular_price;
            span_med.innerHTML = record.pizzas['nonVeg_pizza'][i].medium_price;
            span_lar.innerHTML = record.pizzas['nonVeg_pizza'][i].large_price;

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

            add_reg.setAttribute('data-id',record.pizzas['nonVeg_pizza'][i].id);
            add_med.setAttribute('data-id',record.pizzas['nonVeg_pizza'][i].id);
            add_lar.setAttribute('data-id',record.pizzas['nonVeg_pizza'][i].id);
            add_reg.setAttribute('title','Add To Card');
            add_med.setAttribute('title','Add To Card');
            add_lar.setAttribute('title','Add To Card');
            
            img.src=record.pizzas['nonVeg_pizza'][i].img;

            h4.innerHTML = record.pizzas['nonVeg_pizza'][i].pizza_name;
             
            img_div.appendChild(img);
            p.innerHTML = record.pizzas['nonVeg_pizza'][i].descrition;
            li.appendChild(img_div);
            li.appendChild(h4);
            li.appendChild(p);
            li.appendChild(reg_order);
            li.appendChild(add_reg);
            li.appendChild(med_order);
            li.appendChild(add_med);
            li.appendChild(lar_order);
            li.appendChild(add_lar);
          nonveg_type.appendChild(li);
        }        
      }
    } 
      var order_btn = document.getElementsByClassName('order');
      var a=Array.from(order_btn);

      a.forEach(function(element){
        element.addEventListener('click', function(){ order_pizza(this) });
      });

      var add_to = document.getElementsByClassName('add-card');
      var add_card=Array.from(add_to);

      add_card.forEach(function(ele){
        ele.addEventListener('click', function(){ add_to_card(this,record) });
      });

      var offer_order = document.getElementsByClassName('order-now');
      var card_offer=Array.from(offer_order);
      card_offer.forEach(function(e){
        e.addEventListener('click', function(){ order_pizza(this) });
      });

    }   
    // this function use to pass the pizza type and pizza name through url
    function order_pizza(list){
      var id, type , url;
      id=list.getAttribute('data-id');
      type= list.getAttribute('data-type')
      url='order.html?name=' + encodeURIComponent(id)+ '&type=' +encodeURIComponent(type);
        window.location.assign(url);
      }


var card=document.querySelector('.order_summary');
var card_block=document.querySelector('.panel');
var today_date=document.querySelector('.today_date');

 // this part is display the add to card box detail and close it

var close = document.querySelector('.close');
card.onclick = function(){
  card_block.style.display = "block";
}
close.onclick=function(){
  card_block.style.display = "none";
}

today_date.innerHTML = get_date();

// this function is use to generate function
function get_date(){
  var today = new Date();
  var mm = today.getMonth() + 1;
  var dd = today.getDate();
  var yyyy = today.getFullYear();

  return (dd + "/" + mm + "/" + yyyy);
}
        

//this function added select item to the order box
function add_to_card(list,data){
  var id, type, detail, li, span, span_close, span_price, detail_price, item_order, ord_btn, order_click;

    id=list.getAttribute('data-id');
    type= list.getAttribute('data-type');
    detail = document.querySelector('.list-group');
     // this create veg type of pizza
   for (i = 0; i < data.pizzas['veg_pizza'].length; i++){
      if(id==data.pizzas['veg_pizza'][i].id){
        li = document.createElement('li'); 
        span = document.createElement('span');
        span_close = document.createElement('span');
        span_price = document.createElement('span');
        span_price.classList = 'price';
        
        span.innerHTML = data.pizzas['veg_pizza'][i].pizza_name;
        li.appendChild(span);
        if(type =='reg'){
          span_price.innerHTML= data.pizzas['veg_pizza'][i].regular_price;
        }
        else if(type =='med'){
          span_price.innerHTML= data.pizzas['veg_pizza'][i].medium_price;
        }
        else if(type =='lar'){
          span_price.innerHTML= data.pizzas['veg_pizza'][i].large_price;
        }
        li.appendChild(span_price);
        li.appendChild(span_close);
        detail.appendChild(li);
      }
    }
    // this create non veg type of pizza
    for (var i = 0; i < data.pizzas['nonVeg_pizza'].length; i++){
      if(id==data.pizzas['nonVeg_pizza'][i].id){
        li = document.createElement('li'); 
        span = document.createElement('span');
        span_price = document.createElement('span');
        span_price.classList = 'price';
        
        span.innerHTML = data.pizzas['nonVeg_pizza'][i].pizza_name;
        li.appendChild(span);
        if(type =='reg'){
          span_price.innerHTML= data.pizzas['nonVeg_pizza'][i].regular_price;
        }
        else if(type =='med'){
          span_price.innerHTML= data.pizzas['nonVeg_pizza'][i].medium_price;
        }
        else if(type =='lar'){
          span_price.innerHTML= data.pizzas['nonVeg_pizza'][i].large_price;
        }
        li.appendChild(span_price);
        detail.appendChild(li);
      }
    }

      detail_price = document.getElementsByClassName('price');
      item_order = document.getElementById('order-pannel');
      ord_btn=document.querySelector('.order_btn');
      order_click = document.createElement('a');

      var total = 0;
      var count =detail_price.length;
      for(let i=0; i<detail_price.length;i++){
        var a = detail_price[i].innerHTML;
        var arr=a.split(".");
        total = total + parseInt(arr[1]);
      }
      var dis_total = document.querySelector('.total');
      var count_item = document.querySelector('.badge');
      dis_total.innerHTML=total;
      count_item.innerHTML = count;

      order_click.setAttribute('href','#FIXME');
      order_click.setAttribute('class','order-card');
      order_click.setAttribute('data-price',total);
      order_click.setAttribute('data-type','Add To Card');
      order_click.innerHTML= 'order now';
      ord_btn.appendChild(order_click);
      if(ord_btn.childNodes.length > 1){    
        if(ord_btn.firstChild)
        ord_btn.removeChild(ord_btn.firstChild);
      }


      var get_order = document.querySelector('.order-card');
// this function use to pass the add to card pizza price and pizza name through url
      order_click.onclick = function() {
        var id, type, url;
        id=order_click.getAttribute('data-price');
        type = order_click.getAttribute('data-type');
        url='order.html?name=' + encodeURIComponent(id)+'&type=' +encodeURIComponent(type);
         window.location.assign(url);
      }    
}