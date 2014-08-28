console.log('\'Allo \'Allo!');


$('.feature').mouseenter( function() {
	
    $('> .more' , this).css('visibility', 'visible');
});

$('.feature').mouseleave( function() {
	
    $('> .more' , this).css('visibility', 'hidden'); 
});



$('.extra').mouseenter( function() {
	
    $('> .more' , this).css('visibility', 'visible');
});

$('.extra').mouseleave( function() {
	
    $('> .more' , this).css('visibility', 'hidden'); 
});



$('.navmenu-fixed-left').on("click", function() {
	$('.smallNav').css('left', '0em');
});