(function(app) {

  var routeLoadingIndicator = function($rootScope) {
    return {
      restrict: 'E',      
      template: "<div layout='row' layout-align='center center' ng-if='isRouteLoading'> <div></div> <div><br><br><br><br><br><br><br><br> <md-progress-circular md-mode='indeterminate'></md-progress-circular></div><div></div></div>",
      link: function(scope, elem, attrs) {
        scope.isRouteLoading = false;

        $rootScope.$on('$routeChangeStart', function() {
          scope.isRouteLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
          scope.isRouteLoading = false;
        });
      }
    };
  };
  routeLoadingIndicator.$inject = ['$rootScope'];

  app.directive('routeLoadingIndicator', routeLoadingIndicator);

}(angular.module('storefrontApp')));
