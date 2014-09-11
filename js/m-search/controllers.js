
(function(){

  var app = angular.module('search-controllers', ['search-directives']);

  app.controller('SearchController', function($scope){

    $scope.toggle = false;
    
    $scope.toggleInput = function(){
      $scope.toggle = true;
    };

  });

})();