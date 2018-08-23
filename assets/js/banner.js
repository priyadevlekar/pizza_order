'use strict';

(function() {

  var slider, controls, c, btnRight, btnLeft, i, k, index, sliderContainer;

	slider = document.getElementById("hero-slider");
	controls = document.querySelectorAll(".slider-controls .control");
	c = Array.from(controls);
	btnRight = document.getElementById("right");
	btnLeft = document.getElementById("left");
	i = 0;

	sliderContainer = document.querySelector(".container .slider-container");
	c[i].classList.add("active");

	//Previous Button

	btnRight.addEventListener('click', function (e) {
	    e.preventDefault();
	    if(i < (controls.length-1)) {
	    	c.forEach(function(element){
				element.classList.remove("active");
			});

			// console.log("Clicked");
	    	// if(index>=0) i = index;
	    	i++;
		    console.log("i=",i);
		    move(i);

		    c[i].classList.add("active");
	    }
	    else if(i === (controls.length-1)) {
	    	c.forEach(function(element){
				element.classList.remove("active");
			});

			// console.log("Clicked");
	    	// if(index>=0) i = index;
	    	i=0;
		    console.log("i=",i);
		    move(i);

		    c[i].classList.add("active");
	    }
	});

	//Next Button

	btnLeft.addEventListener('click', function (e) {
	    e.preventDefault();
	    if(i>0) {

	    	c.forEach(function(element){
				element.classList.remove("active");
			});

			console.log("Clicked"); 
	    	// if(index>=0) i = index;
	    	--i;
			console.log("i=",i);
		    move(i);
		    c[i].classList.add("active");
	    }
	});

	// Slider controls

	for(k=0;k<c.length;k++) {
		c[k].addEventListener('click',function(e) {
			c.forEach(function(element){
				element.classList.remove("active");
			});

			e.preventDefault();
			index = c.indexOf(this);
			i = index;
			move(index);
			// console.log("index=",index);
			c[index].classList.add("active");
		});
	}

	//Move method

	function move(i) {
	    if(i==0) {
	    	slider.style.marginLeft = "calc(-100% *" + 0 + ")";
	    }
	    else if(i>0 && i<=3) {
	    	slider.style.marginLeft = "calc(-100% *" + i + ")";
	    }
	}

	var countDownDate = new Date(" aug 26, 2018 11:00:00").getTime();
console.log(countDownDate);

var counter = setInterval(function(){
	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000*60*60*24));
	var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
	var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
	var seconds = Math.floor((distance % (1000*60)) / 1000);

	document.getElementById('timer').innerHTML = days +"d : " + hours+ "h : "+ minutes+"m : "+ seconds+"s";

	if(distance<0) {
		clearInterval(counter);
		document.getElementById("timer").innerHTML="Expired";
	}

}, 1000);


})();