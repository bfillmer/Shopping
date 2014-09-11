
(function(){

  var app = angular.module('cart-directives', []);

  app.directive('navCartToggle', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/nav-cart-toggle.html',
    };
  });

  app.directive('sectionCartContents', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/section-cart-contents.html',
    };
  });

})();