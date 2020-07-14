(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;
    itemAdder.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
      itemAdder.message = ShoppingListService.errors();
          itemAdder.messages = ShoppingListService.errorz();

  };

itemAdder.toBuy = ShoppingListService.getItems();
  itemAdder.messages = ShoppingListService.errorz();


}
ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.bought = ShoppingListService.getItem();


}


function ShoppingListService() {
  var service = this;
  var toBuy = [{name : "cookies",quantity : "10"},{name : "drinks",quantity : "15"},{name : "snacks",quantity : "20"},{name : "milk",quantity : "05"},{name : "choclates",quantity : "50"}];

  var bought = [];
  var items;

  service.removeItem = function (itemIndex) {

 items=  toBuy.splice(itemIndex, 1);

 var item = {
     name: items[0]["name"],
     quantity:items[0]["quantity"],
   };
 bought.push(item);



  };
  service.errors = function () {
    if (toBuy.length == 0)
    {
return "Everything is bought!";
    }
  };
    service.errorz = function () {
      if(bought.length == 0){
      return "Nothing  Bought Yet :(";
    }
    else if(bought.length >= 0){
      return undefined;
    }
  };

  service.getItems = function () {
    return toBuy;
  };
  service.getItem = function () {
    return bought;
  };
}

})();
