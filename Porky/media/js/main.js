$('document').ready(function () {

	console.log('yo');

	if ($("#header").visible(false)) {
		("#nav").attr({
			position: "fixed",
			top: "0px"
		});
		console.log("nav");
	};

});