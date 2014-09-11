
(function(){

  var app = angular.module('utility-directives', []);

  app.directive('ngFocus', function($timeout){
    return {
      restrict: 'A',
      link: function($scope, $element, $attr){
        $scope.$watch($attr.ngFocus, function(value){
          if(value){
            $timeout(function(){
              if($scope.$eval($attr.ngFocus)){
                $element[0].focus();
              }
            }, 0, false);
          }
        });
      }
    };
  });

})();