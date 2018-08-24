

"use strict";

window.onload = function () {

//this function use to split value from url and get it into variable and then ti pass throught another function
// to get pizza to order.

  var id , type, temp, parameters, detail, price_detail, price ,img, img_div, h4;
  var str= location.search;
  if(str.includes("Card")){
    parameters = location.search.substring(1).split("&");

    temp = parameters[0].split("=");
    id = unescape(temp[1]);
    temp = parameters[1].split("=");
    type = unescape(temp[1]);
      order_multiple(id,type);
    
  }
  else {
    parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    id = unescape(temp[1]);
    temp = parameters[1].split("=");
    type = unescape(temp[1]);
    loadDoc();
  }

// this function will load the data from json file

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

function call_record(data){
  detail=document.getElementById('order_detail');
  price_detail = document.querySelector('.form-group');
  price = document.getElementById('pizzaCost');

    for (var i = 0; i < data.pizzas['veg_pizza'].length; i++){
      if(id==data.pizzas['veg_pizza'][i].id){
      	img_div = document.createElement('div');
        img = document.createElement('img');
        h4 = document.createElement('h4');
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
        img_div = document.createElement('div');
        img = document.createElement('img');
        h4 = document.createElement('h4');
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

// this function is for ordering card item
function order_multiple(total,type){
  var detail, h4, price;
  detail=document.getElementById('order_detail');
  h4 = document.createElement('h4');
  h4.innerHTML = type;
  detail.appendChild(h4);
  price = document.getElementById('pizzaCost');
  price.innerHTML = total;
}


// this function is to check all order detail filled by the user and place the order and generate message
// for successful order detail 

var submit = document.querySelector('.submit');


submit.addEventListener('click', function(){
  var form_name, form_ph, form_add, form_zip, name, price;
    var ph_str="/^\d{10}$/";

    form_name = document.forms["address-form"]["fname"].value
    form_ph = document.forms["address-form"]["phone"].value
    form_add = document.forms["address-form"]["address"].value
    form_zip = document.forms["address-form"]["zip"].value
    if (form_name == "") {
        alert("Please Enter Name");
        return false;
    }
    if (form_ph == "" && form_ph.match(ph_str)) {
        alert("Please Enter Phone Number and only digit value");
        return false;
    }
    if (form_add == "") {
        alert("Please Enter Address");
        return false;
    }
    if (form_zip == "" && form_zip.match(ph_str)) {
        alert("Please Enter form_zip and only digit value");
        return false;
    }

  name =  document.querySelector('h4').innerHTML;
  price = document.getElementById('pizzaCost').innerHTML;
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
      record.order.push({
        pizza_type : name,
        pizza_price : price,
        date: date
      });
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


  // this function use to store today date
function get_date(){
    var today = new Date();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var yyyy = today.getFullYear();

    return (dd + "/" + mm + "/" + yyyy);
       
  }