console.log('\'Allo \'Allo!');

$(document).on('ready', function(e){

	'use strict';

	var items = ['red', 'blue', 'green'];
	
	for (var i = 0; i < items.length; i++) {
		console.log(items[i]);
	}

	var item = _.filter(items, function(val) {
		return val === 'green';
	});

	console.log(e);
});