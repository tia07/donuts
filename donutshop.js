

var glazedDonut = '<div class="glazed-row1" id="row-one">'+

				'<div>'+'<img src="donuts/caramelGlazed.png" width="200" height="200">'+'<p>'+'Caramel Glazed'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/strawberryGlazed.png" width="200" height="200">'+'<p>'+'Strawberry Glazed'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/cinamonsugarGlazed.png" width="200" height="200">'+'<p>'+'Cinamon Sugar'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/glazeddg.png" width="200" height="200">'+'<p>'+'Regular Glazed'+'</p>'+'</div>'+

			'</div>'+

			'<div class="glazed-row1" id="row-two">'+

				'<div>'+'<img src="donuts/glazedTwist.png" width="220" height="100">'+'<p>'+'Glazed Twist'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/cinamontwist.png" width="220" height="100">'+'<p>'+'Cinamon Sugar Twist'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/chocoBar.png" width="220" height="100">'+'<p>'+'Chocolate Bar'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/maplebar.png" width="220" height="100">'+'<p>'+'Maple Bar'+'</p>'+'</div>'+

			'</div>';

		var cake = '<div class="glazed-row1" id="row-three">'+

				'<div>'+'<img src="donuts/blueberrycake.png" width="200" height="200">'+'<p>'+'Blueberry Cake'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/stawberry.png" width="200" height="200">'+'<p>'+'Strawberry Cake'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/pinksprinkle.png" width="200" height="200">'+'<p>'+'Pink Sprinkle Cake'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/whitespinkle.png" width="200" height="200">'+'<p>'+'Long Sprinkle Cake '+'</p>'+'</div>'+

			'</div>'+

			'<div class="glazed-row1" id="row-four">'+

				'<div>'+'<img src="donuts/chocakepenut.png" width="200" height="200">'+'<p>'+'Chocolate Penut Cake'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/develfoot.png" width="200" height="200">'+'<p>'+'Devil foot Cake'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/spinklechoco.png" width="200" height="200">'+'<p>'+'Chocolate Sprinkle Cake'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/whitecoco.png" width="200" height="200">'+'<p>'+'Coconut Cake'+'</p>'+'</div>'+

			'</div>';

		var assorted = '<div class="glazed-row1" id="row-five">'+

				'<div>'+'<img src="donuts/chocoship.png" width="270" height="200">'+'<p>'+'Chocolate Chip Bar'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/cinamonroll.png" width="200" height="200">'+'<p>'+'Cinamon Roll'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/applefritter.png" width="200" height="200">'+'<p>'+'Apple Fritter'+'</p>'+'</div>'+
				'<div>'+'<img src="donuts/cherryturover.png" width="270" height="200">'+'<p>'+'Cherry Turnover'+'</p>'+'</div>'+

			'</div>';

			
		
var menuContainer = document.getElementById('menu-container');

var glazed = document.getElementById('glazed');
glazed.addEventListener('click',function(event) {

	menuContainer.innerHTML = glazedDonut;
	event.preventDefault();
	
});

var cakey = document.getElementById('cake');
cakey.addEventListener('click',function(event) {

	menuContainer.innerHTML = cake;
	event.preventDefault();
	
});

var assorteddd = document.getElementById('assorted');
assorteddd.addEventListener('click',function(event) {

	menuContainer.innerHTML = assorted;
	event.preventDefault();
	
});










