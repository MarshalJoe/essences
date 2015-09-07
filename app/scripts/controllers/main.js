'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
.controller('MainCtrl', function($scope, $location, MoltinAuth) {

	MoltinAuth.then(function(moltin) {
        moltin.Category.List(null, function(categories) {
        	$scope.categories = categories;
        	console.log(categories);
        });
    });

    $scope.go = function (path) {
    	$location.path(path);
    }

});
