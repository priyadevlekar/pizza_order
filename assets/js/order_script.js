

"use strict";

console.log('hit');
window.onload = function () {

    var cost;

	var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    id = unescape(temp[1]);
    console.log(id);
    temp = parameters[1].split("=");
    type = unescape(temp[1]);
    console.log(type);
    
    loadDoc();

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
            img = document.createElement('img');
            img.src=data.pizzas['nonVeg_pizza'][i].img;
            detail.appendChild(img);
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