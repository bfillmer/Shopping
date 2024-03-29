(function(){

  var app = angular.module('utility-filters', []);

  // Sprintf filter, courtesy of https://gist.github.com/jakobloekke/7303217.
  app.filter('sprintf', function() {
    function parse(str) {
        var args = [].slice.call(arguments, 1),
            i = 0;
    
        return str.replace(/%s/g, function() {
            return args[i++];
        });
    }
 
    return function(str) {
        return parse(str, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    };
  });

})();