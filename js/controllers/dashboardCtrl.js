'use strict';
angular.module("dashboard.controllers")
    .controller('dashboardCtrl', ["$scope", "$state","$rootScope","apiService",
            function($scope, $state, $rootScope,apiService) {
     $scope.addItems={};

apiService.dashboardDetails().success(function(data){

	  $scope.items = data;
	   console.log("ites",  $scope.items);
})

   
    $scope.toggleDetail = function($index) {
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };

    $scope.getKeys = function(obj,deleteKey){
    	//console.log('incomign obj ',obj);
    	var deviceclassRemove = angular.copy(obj);
    	if(deleteKey){
    		 delete deviceclassRemove[deleteKey];
    	}
    	return Object.keys(deviceclassRemove).map(function(key){
    		if(obj.hasOwnProperty(key) && !/^\$\$/.test(key))
    			return key;
    	});
    }

	 $scope.editItems = function (items) {
        $rootScope.editItems = items;
        // $scope.$emit('eventName', $scope.editItems);
      
        $state.go("dashboardEdit");
    };
                


       $scope.addItemsCal = function (items) {
       
          apiService.dashboardAdd(items).success(function(data){

              
              //console.log("items",  data);
            
            });

        };
}]);