(function(){
    'use strict';

    angular.module('ShoppingListApp',[])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
        ToBuyController.$inject = ['ShoppingListCheckOffService'];
        function ToBuyController(ShoppingListCheckOffService) {
            var buyer = this;
            buyer.buy = function (index) {
                ShoppingListCheckOffService.buy(index);
            }
            buyer.items = ShoppingListCheckOffService.getItems();
        }

        AlreadyBoughtController.$inject= ['ShoppingListCheckOffService'];

        function AlreadyBoughtController(ShoppingListCheckOffService) {
            var bought = this;
            bought.items = ShoppingListCheckOffService.getBoughtItems();
        }

        function ShoppingListCheckOffService() {
            var service = this;

            var items = [{name: "cookies", quantity: 10}, 
            {name: "chips", quantity: 5},
            {name: "chocolate", quantity: 15},
            {name: "candies", quantity: 20},
            {name: "sandwiches", quantity: 30}];
        
            var boughtItems = [];
            
            service.buy = function (index) {
                boughtItems.push(items[index]);
                items.splice(index, 1);
            };

            service.getItems = function () {
                return items;
            };

            service.getBoughtItems = function () {
                return boughtItems;
            };  

        }
    

})();
