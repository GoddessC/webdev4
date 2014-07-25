$('document').ready(function () {

	console.log('yo');


	//loader button
	$('button').click(function(){
		$(this).addClass('zoom');
		$('#loader').addClass('backNums');
		setTimeout(function(){
			$('#loader').slideToggle('slow');
   			document.getElementById("content").style.display = "block";
   		}, 2500);
	});



	//close nav
	$('.nav-toggle').click( function(){
		$('.nav').toggleClass('nav-open');
	});



	//Flip card over
	 $('.card').click(function(){
        $(this).toggleClass('flipped'); 

    });



	// Nav Links Flip Cards automatically

	 $("a[href^=#dev]").click( function(){
	 	$('div#dev').addClass('flipped');

	 });

	 $("a[href^=#anim]").click( function(){
	 	$('div#anim').addClass('flipped');
	 });

	 $("a[href^=#trends]").click( function(){
	 	$('div#trends').addClass('flipped');
	 });

	 $("a[href^=#prog]").click( function(){
	 	$('div#prog').addClass('flipped');
	 });

});