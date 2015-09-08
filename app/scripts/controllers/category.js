'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('CategoryCtrl', function ($scope, category, products, $timeout, $rootScope, moltin) {
    $scope.category = category;
    $scope.products = products;
    $scope.searchProducts = {};

    $scope.addToCart = function(product) {
      product.addStatus = 'Adding...';
      // Insert(id, qty, modifiers/size, callback)
      moltin.Cart.Insert(product.id, 1, null, function(cart) {
        product.addStatus = 'Success!';
        moltin.Cart.Contents(function(items) {
          $rootScope.cart = items;
          $rootScope.$apply();
        });
        $scope.$apply();
        $timeout(function() {
          product.addStatus = null;
        }, 2000);
      });
    }
  });
