
(function () {

  var app = angular.module('cart-services', [
    'ngStorage',
    ])

  .factory('CartStorage', function ($localStorage) {

    return {

      init: function () {
        if (angular.isUndefined($localStorage.cartProducts)) {
          $localStorage.cartProducts = [];
        }
      },

      addToCart: function (product) {
        $localStorage.cartProducts.push(product);
      },

    }

  });

})();