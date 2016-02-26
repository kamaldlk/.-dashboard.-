'use strict';
angular.module("dashboard.controllers")
    .controller('dashboardCtrl', ["$scope", "$state","$rootScope","apiService",
            function($scope, $state, $rootScope,apiService) {
    
$scope.addItems={};

apiService.dashboardDetails().then(function(data){

	  $scope.items = data;
	   
})

   
    $scope.toggleDetail = function($index) {
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };

    $scope.getKeys = function(obj,deleteKey){

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

        $rootScope.$broadcast('eventName', items);
 $rootScope.$emit('eventNames', { message: "msg" });
        $rootScope.editItems = items;
        // $scope.$emit('eventName', $scope.editItems);
      
        $state.go("dashboardEdit");
    };
                


       $scope.addItemsCal = function (items) {
       
          apiService.dashboardAdd(items).then(function(data){

              
              //console.log("items",  data);
            
            });
            $scope.addItems={}
        };

        $scope.addDeviceItems= function (items) {
       
          apiService.dashboardAdd(items).then(function(data){

              
              //console.log("items",  data);
            
            });
            $scope.addItems={}
        };

        $scope.addNetItems= function (items) {
       
          apiService.dashboardAdd(items).then(function(data){

              
              //console.log("items",  data);
            
            });
            $scope.addItems={}
        };
}]);