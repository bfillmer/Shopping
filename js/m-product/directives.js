
(function(){

  var app = angular.module('product-directives', [])

  .directive('productsGrid', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/products-grid.html',
    };
  });

})();