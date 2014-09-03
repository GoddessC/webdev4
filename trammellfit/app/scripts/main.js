console.log('\'Allo \'Allo!');

function escapeRegExp(string){
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

var fitApp = angular.module('fitApp', []); //dependancy injection. how u include other angular/ls objs into module
fitApp.controller('fitnessController', function($scope){

	

	$scope.fitnessImages = [

		{
			name: 'Kettle Bell Lifts',
			imgUrl: 'images/kettlelift.jpg',
			description: 'This is a description on how to do Kettle Bell lifts'
		},
		{
			name: 'Kettle Bell Lunges',
			imgUrl: 'images/kettlelunge.jpg',
			description: 'This is a description on how to do Kettle Bell Lunges'

		},
		{
			name: 'Chair Dips',
			imgUrl: 'images/dips.jpg',
			description: 'This is a description on how to do Chair Dips'

		},
		{
			name: 'Yoga Ball Situps',
			imgUrl: 'images/ballups.jpg',
			description: 'How does one doe a Sit-up on a Yoga Ball?'

		},
		{
			name: 'Standing Sidekicks',
			imgUrl: 'images/sidekick.jpg',
			description: 'Proper form of standing Sidekicks.'
 
		},
		{
			name: 'Standing Frontkicks',
			imgUrl: 'images/sidekick.jpg',
			description: 'Proper form of standing Frontkicks.'
 
		},
		{
			name: 'Hip Ups',
			imgUrl: 'images/hipup.jpeg',
			description: 'Proper form of completing a hipup.'
 
		},
		{
			name: 'Russian Twists',
			imgUrl: 'images/russian.jpg',
			description: 'Proper form of completing a russian twist.'
 
		}

	];

	$scope.selectedText="";



	$scope.fitnessImageClick = function(description){
		// console.log(event);
		// return alert(description);
		$scope.selectedText = description;
	};

	$scope.filterBySearch = function(name) {
        if (!$scope.fitnessImages) return true;
        var regex = new RegExp('\\b' + escapeRegExp($scope.search), 'i');
        return regex.test(character.name);
    };


});

