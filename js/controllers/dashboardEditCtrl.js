'use strict';
angular.module("dashboard.controllers")
    .controller('dashboardEditCtrl', ["$scope", "$state","$rootScope","apiService",
            function($scope, $state, $rootScope,apiService) {
      
   /* $scope.$on('eventName', function (event, args) {
     $scope.message = args;
    
     });*/
         $scope.items = $rootScope.editItems;           
 

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

    $scope.cancel = function(){

        $state.go("dashboard");
    }

     $scope.updateDashboard = function(items){
      apiService.dashboardUpdate(items).success(function(data){
      
      })
        $state.go("dashboard");
    }

}]);