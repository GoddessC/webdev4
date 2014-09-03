console.log('\'Allo \'Allo!');

$('document').ready(function () {

	window.onload = intro1;

	console.log("yo");

	//Eyeball transform into YinYang

	$('.eye').mouseenter( function(){
	});


	$('.eye').mouseleave( function(){
		$('#iris').css({"opacity":"1"});
	});

	$(document).ready(function(){
	    var player = $('#iris');
	    //Checks to see which key is pressed down
	    
	    $(window).on('mousemove', function (e) {
	      
	      //Current position
	      var p1 = {
	        x: player.offset().left,
	        y: player.offset().top
	      };
	      
	      //Future position
	      var p2 = {
	        x: e.offsetX,
	        y: e.offsetY
	      };
	       
	      //Angle between them in degrees
	      var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI) - 90;
	      
	      if(angleDeg >= 360){
	        angleDeg -= 360;
	      }
	     
	        //Animate the whole thing
	        player.css('-webkit-transform', 'rotateZ(' + angleDeg + 'deg)');
	    });
	});



	//Start the Home Welcome Page 


	function intro1(){
		TweenMax.fromTo("#welcome", 2, {
			opacity: 0
		}, {
			opacity: 1,
			onComplete: function() {
				intro2();
			}
		});
	}


	function intro2() {
		
		TweenMax.fromTo("#host", 4, {
			opacity: 0
		}, {
			opacity: 1,
		});
	}	





});


