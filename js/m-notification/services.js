
(function(){

  var app = angular.module('notification-services', []);

  app.factory('notifications', function(){
    return {
      addItem: '%s added to cart.',
      removeItem: '%s removed from cart.',
      qtyUpdate: 'Quantity for %s set to %s.',
    };
  });

})();