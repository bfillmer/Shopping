
(function () {

  var app = angular.module('cart-controllers', [
    'cart-directives',
    'cart-services',
    ])

  .controller('CartController', function (CartStorage) {

    CartStorage.init();

    this.addToCart = function (product) {
      CartStorage.addToCart(product);
    };

  });

})();