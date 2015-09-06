angular.module('storefrontApp.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: '22zY5gFs4xWRYV7ifdpWNxbd6ihGgt2nS1kUWthe'});
    moltin.Authenticate(function() {
      deferred.resolve(moltin);
    });

    return deferred.promise;
  });
