

"use strict";

window.onload = function () {

  var id , type,tmp;
  var str= location.search;
  if(str.includes("Card")){
    var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    id = unescape(temp[1]);
    console.log(id);
    temp = parameters[1].split("=");
    type = unescape(temp[1]);
    console.log(type);
     order_multiple(id,type);
    
  }
  else {
      var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    id = unescape(temp[1]);
    console.log(id);
    temp = parameters[1].split("=");
    type = unescape(temp[1]);
    console.log(type);
    loadDoc();
  }

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

    function call_record(data){
    
    var detail=document.getElementById('order_detail');
    var price_detail = document.querySelector('.form-group');
    var price = document.getElementById('pizzaCost');

			
         for (var i = 0; i < data.pizzas['veg_pizza'].length; i++){
          if(id==data.pizzas['veg_pizza'][i].id){
          	var img_div = document.createElement('div');
            var img = document.createElement('img');
            var h4 = document.createElement('h4');
            img.src = data.pizzas['veg_pizza'][i].img;
            h4.innerHTML = data.pizzas['veg_pizza'][i].pizza_name;
            detail.appendChild(h4);
            img_div.appendChild(img);
            detail.appendChild(img_div);
            if(type =='reg'){
            	price.innerHTML= data.pizzas['veg_pizza'][i].regular_price;
            }
            else if(type =='med'){
            	price.innerHTML= data.pizzas['veg_pizza'][i].medium_price;
            }
            else if(type =='lar'){
            	price.innerHTML= data.pizzas['veg_pizza'][i].large_price;
            }

		  
          }
          else if(id==data.pizzas['nonVeg_pizza'][i].id){
            var img_div = document.createElement('div');
            img = document.createElement('img');
             var h4 = document.createElement('h4');
            img.src=data.pizzas['nonVeg_pizza'][i].img;
            h4.innerHTML = data.pizzas['nonVeg_pizza'][i].pizza_name;
           detail.appendChild(h4);
            img_div.appendChild(img);
            detail.appendChild(img_div);
            if(type =='reg'){
            	price.innerHTML= data.pizzas['nonVeg_pizza'][i].regular_price;
            }
            else if(type =='med'){
            	price.innerHTML= data.pizzas['nonVeg_pizza'][i].medium_price;
            }
            else if(type =='lar'){
            	price.innerHTML= data.pizzas['nonVeg_pizza'][i].large_price;
            }
              
          }
        }

	}
}


function order_multiple(total,type){
  var detail=document.getElementById('order_detail');
  var h4 = document.createElement('h4');
  h4.innerHTML = type;
  detail.appendChild(h4);
  var price = document.getElementById('pizzaCost');
  price.innerHTML = total;
  console.log('hit');
}


var submit = document.querySelector('.submit');
console.log(submit);

submit.addEventListener('click', function(){

  var name =  document.querySelector('h4').innerHTML;
  var price = document.getElementById('pizzaCost').innerHTML;
  // var fs = require("fs");
    var date = get_date();
    loadAjax(name,price,date);
      
alert(date+"\nyour order will be\n"+name+"\n amount will be:"+price+"\n Your order will be delivered in 35 minutes")
});

function loadAjax(name,price,date){
var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {   
        var record =JSON.parse(this.responseText);
        console.log(record);
        record.order.push({
          pizza_type : name,
          pizza_price : price,
          date: date
        });
        console.log(record);
        // responseText = JSON.stringify(record);
        localStorage.setItem('order.json',JSON.stringify(record));
        var obj = JSON.parse(localStorage.getItem('order.json'));
        // fs.writeFile("./object.json", JSON.stringify(record),(err) =>{
        //   if(err){
        //     console.log(err);
        //     return;
        //   }
        //    console.log("file added");
        // });
      }
    }
    xobj.open('GET', 'order.json', true);
    xobj.send();
  } 

  function get_date(){
    var today = new Date();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var yyyy = today.getFullYear();

    return (dd + "/" + mm + "/" + yyyy);
       
  }