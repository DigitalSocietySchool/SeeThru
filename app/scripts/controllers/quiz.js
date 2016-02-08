'use strict';

/**
 * @ngdoc function
 * @name ecosenseUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecosenseUiApp
 */
angular.module('ecosenseUiApp')
  .controller('QuizCtrl', ['$scope', 'apiService', '$routeParams', '$location', function ($scope, apiService, $routeParams, $location) {
  	$scope.quizJSON = {
	    "info": {
	        "name":    "Test Your Knowledge!!",
	        "main":    "<p>Think you know about mobile phones?</p>",
	        "results": "<h5>Learn More</h5><p>Visit SeeThru to get more information!</p>",
	        "level1":  "Professional",
	        "level2":  "Intermediate",
	        "level3":  "Novice",
	        "level4":  "Amateur",
	        "level5":  "Beginner"
	    },
	    "questions": [
	        {
	            "q": "There are around 36 different materials found in a smartphone. Which of those materials is NOT found in a smartphone?",
	            "a": [
	                {"option": "Gold",      "correct": false},
	                {"option": "Granite",     "correct": true},
	                {"option": "Mercury",      "correct": false},
	                {"option": "Silver",     "correct": false}
	            ],
	            "correct": "<p><span>Correct Answer!</span></p>",
	            "incorrect": "<p><span>Sorry, that's not correct!</span></p>" // no comma here
	        },
	        {
	            "q": "It takes a ton of ore to get 1g of gold. How many phones would you need to get the same amount of gold, if they were properly recycled?",
	            "a": [
	                {"option": "41 recycled phones",      "correct": true},
	                {"option": "4100 recycled phones",     "correct": false},
	                {"option": "There is no gold found inside phones.",      "correct": false}
	            ],
	            "correct": "<p><span>Correct Answer!</span></p>",
	            "incorrect": "<p><span>Sorry, that's not correct!</span></p>" // no comma here
	        },
	        {
	            "q": "What do you think is the main concern for the future of smartphones? (according to a BBC article)",
	            "a": [
	                {"option": "Shortage in the availability of certain materials to produce them",      "correct": true},
	                {"option": "The shortage of energy sources to make them work",     "correct": false},
	                {"option": "The possibility to make them smaller",      "correct": false}
	            ],
	            "correct": "<p><span>Correct Answer!</span></p>",
	            "incorrect": "<p><span>Sorry, that's not correct!</span></p>" // no comma here
	        },
	        {
	            "q": "The rare raw materials for consumer electronics are sometimes referred to as the ‘seeds of technology’. What the percentage of these rare earths deposits are nowadays exported from China?",
	            "a": [
	                {"option": "Less than 10%",      "correct": false},
	                {"option": "Around 45%",     "correct": false},
	                {"option": "Around 90%",      "correct": true}
	            ],
	            "correct": "<p><span>Correct Answer!</span></p>",
	            "incorrect": "<p><span>Sorry, that's not correct!</span></p>" // no comma here
	        },
	        {
	            "q": "What is a conflict mineral?",
	            "a": [
	                {"option": "A mineral from mines of which the ownership generates conflict between surrounding countries",      "correct": false},
	                {"option": "A mineral from mines in conflict areas, which profit is used to finance armed conflict ",     "correct": true},
	                {"option": "A mineral with conflicting chemicals inside",      "correct": false}
	            ],
	            "correct": "<p><span>Correct Answer!</span></p>",
	            "incorrect": "<p><span>Sorry, that's not correct!</span></p>" // no comma here
	        },
	        {
	            "q": "At the beginning of 2015 a research was done in the Netherlands on the topic of smartphone ownership. For each 10 Dutch consumers, how many of them own a smartphone?",
	            "a": [
	                {"option": "Around 4 (40%)",      "correct": false},
	                {"option": "Around 6 (60%)",      "correct": false},
	                {"option": "Around 8 (80%)",      "correct": true},
	                {"option": "Every person in the Netherlands owns a smartphone",     "correct": false}
	            ],
	            "correct": "<p><span>Correct Answer!</span></p>",
	            "incorrect": "<p><span>Sorry, that's not correct!</span></p>" // no comma here
	        },
	    ]
		};
  	$('#slickQuiz').slickQuiz({
  		json: $scope.quizJSON
  	});
  }]);
