
(function(){

  var app = angular.module('product-services', [])

  .factory('Products', function(){

    return {

      getProducts: function(){

        var imgBase = 'img/products/';

        return [
          {
            id:    1,
            name:  'Bowl and Platter Set',
            price: 3.99,
            thumb: imgBase + 'bowl_platter_white.jpg',
          },
          {
            id:    2,
            name:  'Classic White Bowl',
            price: 4.99,
            thumb: imgBase + 'bowl_white.jpg',
          },
          {
            id:    3,
            name:  'Wooden Bowl Set',
            price: 6.99,
            thumb: imgBase + 'bowl_wooden.jpg',
          },
          {
            id:    4,
            name:  'Glass Cup',
            price: 8.99,
            thumb: imgBase + 'cup_clear.jpg',
          },
          {
            id:    5,
            name:  'Coffee Mug Set',
            price: 12.99,
            thumb: imgBase + 'cup_white.jpg',
          },
          {
            id:    6,
            name:  'Social Pitcher',
            price: 10.99,
            thumb: imgBase + 'pitcher_clear.jpg',
          },
          {
            id:    7,
            name:  'Faux Blue China Plate',
            price: 1.99,
            thumb: imgBase + 'plate_blue.jpg',
          },
          {
            id:    8,
            name:  'Classic White Plate',
            price: 2.99,
            thumb: imgBase + 'plate_white.jpg',
          },
        ];
      }

    };
    
  });

})();