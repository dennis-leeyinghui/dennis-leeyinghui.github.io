
var foodCostList = angular.module("shoppingList", []);

foodCostList.controller("index", ["$scope", function ($scope){
  
  $scope.itemName;
  $scope.quantityUsed;
  $scope.quantityPurchased;
  $scope.itemUnit;
  $scope.eachUnitCost;
  $scope.itemPrice;
  
  var success = document.getElementById('successMessage');
  var error = document.getElementById('errorMessage');
  
  $scope.selection = [];
  
  $scope.getPerUnitCost = function(){
      var total = $scope.itemPrice / $scope.quantityPurchased * $scope.quantityUsed;
    return total;
  }
  
  $scope.list = [
//    {name: 'Milk', usedQuantity: 5, purchasedQuantity: 1000, unit:'mL', price: 2.65, // perUnitCost: $scope.getPerUnitCost(), checked: false},
/*    {name: 'Yoghurt', usedQuantity: 10, purchasedQuantity: 200, unit:'mL', price: 5, checked: false}, */
  ];
  
  
  $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.list.length; i++){
        total += $scope.list[i].price;
    }
    return total;
  };
  

  
/*
  $scope.inventory = [
    {name: 'Milk', shop:'CVS', quantity: 1, price: 2.65},
    {name: 'Bread', shop: 'CVS', quantity: 1, price: 2.15},
    {name: 'Eggs', shop: 'CVS', quantity: 1, price: 1.75},
  ];
*/
  
  $scope.remove = function(item) { 
    var index = $scope.list.indexOf(item)
    $scope.list.splice(index, 1);     
  }
  
  $scope.removeInventory = function(item) { 
    var index = $scope.inventory.indexOf(item)
    $scope.inventory.splice(index, 1);     
  }
    
  $scope.clearAll = function(list){
  	var length = list.length;
     list.splice(0, length);
  };
    
    $scope.addItem = function() {
      
      
  /*    
        $scope.getPerUnitCost2 = function(){
          //var total = 0;
          total = $scope.itemPrice / $scope.quantityPurchased * $scope.quantityUsed;
        return total;
      };  */
      
       console.log("addItem ing");
       if($scope.itemName && $scope.quantityUsed && $scope.quantityPurchased && $scope.itemPrice){
         console.log("if == true");
	        $scope.list.push({
            name: $scope.itemName, 
            usedQuantity: $scope.quantityUsed, 
            purchasedQuantity: $scope.quantityPurchased, 
            unit: $scope.itemUnit, 
            price: $scope.itemPrice.toFixed(0), 
            perUnitCost: $scope.getPerUnitCost().toFixed(2),
            checked: false});
         console.log($scope.itemName, $scope.quantityUsed, $scope.quantityPurchased, $scope.itemUnit, $scope.getPerUnitCost());
	
	        $scope.itemName = '';
	        $scope.quantityUsed = '';
	        $scope.quantityPurchased = '';
          $scope.itemUnit = '';
	        $scope.itemPrice = '';
	
	        success.style.display = 'block';
	        var timer = setTimeout(function(){
	          success.style.display = 'none';
	        }, 2000);
      }
    }
/*    
    $scope.add = function(item){
      var item = $scope.list.indexOf(item);
 //     $scope.inventory.push($scope.list[item]);
      $scope.list[item].checked = true;  
    }*/
}]);