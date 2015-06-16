(function() {
  var app = angular.module('GarageFloor', []);

  app.controller('GarageController', function(){
    this.product = car;
  });

  var car = {
    name: 'Porsche',
    price: 11000.50,
    canPurchase: false,
    soldOut: true
  };
})();
