'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
.controller('MainCtrl', function ($scope, $location, MoltinAuth, $mdDialog, $timeout) {


    $scope.go = function (path) {
    	$location.path(path);
    };
});
