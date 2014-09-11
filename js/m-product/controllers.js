
(function(){

  var app = angular.module('product-controllers', [
    'product-directives',
    'product-services',
    ]);

  app.controller('ProductGridController', function(Products){

    this.products = Products.getProducts();

  });

})();