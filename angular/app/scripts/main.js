console.log('\'Allo \'Allo!');

var customerApp = angular.module('customerApp', []); //dependancy injection. how u include other angular/ls objs into module
customerApp.controller('SouthParkController', function($scope){

	
	$scope.southParkCharacters = [

		{
			name: 'Kenny McCormick',
			quote: 'Oh no!',
			imgUrl: 'images/kenny.jpeg'
		},
		{
			name: 'Eric Cartman',
			quote: 'Mom! Ben Affleck is naked in my bed!',
			imgUrl: 'images/cartman.jpeg'
		},
		{
			name: 'kyle broflovski',
			quote: 'You bastard!',
			imgUrl: 'images/kyle.jpeg'
		},
		{
			name: 'stan marsh',
			quote: "Cartman, you're retarded",
			imgUrl: 'images/stan.jpeg'
		},
		{
			name: 'chef',
			quote: "I'm gonna make love, even when I'm dead",
			imgUrl: 'images/chef.jpeg'
		}

	];

	$scope.selectedText="";
	$scope.date= new Date();


	$scope.southParkClick = function(quote){
		// console.log(event);
		// return alert(quote);
		$scope.selectedText = quote;
	};



});

