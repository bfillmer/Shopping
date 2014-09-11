
(function(){

  var app = angular.module('notification-directives', []);

  app.directive('sectionShopNotifications', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/section-shop-notifications.html',
    };
  });

})();