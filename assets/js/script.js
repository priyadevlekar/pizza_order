/* Author: 

*/

"use strict";
window.onload= loadDoc();

var li, img_div, img, reg_order, med_order, lar_order, h4,p,add_reg,add_med,add_lar;
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
              span_reg.innerHTML = record.pizzas['veg_pizza'][i].regular_price;
              span_med.innerHTML = record.pizzas['veg_pizza'][i].medium_price;
              span_lar.innerHTML = record.pizzas['veg_pizza'][i].large_price;

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
      console.log(order_btn);

      a.forEach(function(element){
        element.addEventListener('click', function(){ order_pizza(this) });
      });

      var add_to = document.getElementsByClassName('add-card');
      var a=Array.from(add_to);
      console.log(add_to);

      a.forEach(function(ele){
        console.log(ele);
        ele.addEventListener('click', function(){ add_to_card(this,record) });
      });

    }   

     function order_pizza(list){
     var id=list.getAttribute('data-id');
      var type= list.getAttribute('data-type')
        var url='order.html?name=' + encodeURIComponent(id)+ '&type=' +encodeURIComponent(type);
        window.location.assign(url);
      }


var card=document.querySelector('.order_summary');
var card_block=document.querySelector('.panel');
var today_date=document.querySelector('.today_date');

var close = document.querySelector('.close');
card.onclick = function(){
  card_block.style.display = "block";
}
close.onclick=function(){
  card_block.style.display = "none";
}

today_date.innerHTML = get_date();
console.log(today_date);



function get_date(){
    var today = new Date();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var yyyy = today.getFullYear();

    return (dd + "/" + mm + "/" + yyyy);
  }
        


function add_to_card(list,data){
  console.log(data);
  var id=list.getAttribute('data-id');
      var type= list.getAttribute('data-type');
      var detail = document.querySelector('.list-group');
     


   for (var i = 0; i < data.pizzas['veg_pizza'].length; i++){
      if(id==data.pizzas['veg_pizza'][i].id){
        var li = document.createElement('li'); 
        var span = document.createElement('span');
        var span_price = document.createElement('span');
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
        detail.appendChild(li);
        console.log(detail);
      }
      
    }

    var detail_price = document.getElementsByClassName('price');
     var item_order = document.getElementById('order-pannel');
      var ord_btn=document.querySelector('.order_btn');
      var order_click = document.createElement('a');

      var total = 0;
      var count =detail_price.length;
      for(let i=0; i<detail_price.length;i++){
        var a = detail_price[i].innerHTML;
        var arr=a.split(".");
        console.log(arr[1]);
        total = total + parseInt(arr[1]);
      }
      console.log(total);
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
        console.log('hit');
        if(ord_btn.firstChild)
        ord_btn.removeChild(ord_btn.firstChild);
      }

      
      console.log(order_click);

      var get_order = document.querySelector('.order-card');

      order_click.onclick = function() {
        var id=order_click.getAttribute('data-price');
        var type = order_click.getAttribute('data-type');

        console.log(type);
        var url='order.html?name=' + encodeURIComponent(id)+'&type=' +encodeURIComponent(type);
         window.location.assign(url);

      }
      
}