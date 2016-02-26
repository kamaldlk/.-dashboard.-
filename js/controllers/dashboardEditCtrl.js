'use strict';
angular.module("dashboard.controllers")
    .controller('dashboardEditCtrl', ["$scope", "$state","$rootScope","apiService",
            function($scope, $state, $rootScope,apiService) {
      
   /* $scope.$on('eventName', function (event, args) {
     $scope.message = args;
    
     });*/
    $rootScope.$on('eventNames', function (event, args) {
 $scope.message = args.message;
 console.log($scope.message);
 });
      console.log("test1");
         $scope.items = $rootScope.editItems;           
      $rootScope.$on('eventName', function (event, args) {
        console.log("test2");
     $scope.message = args;
     console.log("broadCost ::: ",$scope.message);
 });

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
      apiService.dashboardUpdate(items).then(function(data){
      
      })
        $state.go("dashboard");
    }

}]);