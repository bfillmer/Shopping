
(function(){

  var app = angular.module('search-directives', [])

  .directive('navSearch', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/nav-search.html',
    };
  });

})();