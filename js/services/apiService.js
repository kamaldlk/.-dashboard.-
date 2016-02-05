angular.module('dashboard.services')
.service('apiService',function($http){
    
//dashBoard details Get Api
 
    this.dashboardDetails = function() {
    
    return  $http({
            method: 'GET',
            url: 'json/dashboard.json',
            }).then(function successCallback(response) {

              return response.data;
            }, function errorCallback(response) {
              return response.data; 
        });

     }
     
 //dashBoard details update Api
     
   this.dashboardUpdate = function(items) {
   	  console.log("items Updated :) ",  items);
   return $http({
            method: 'UPDATE',
            url: 'json/dashboard.json',
            data:items
          }).then(function successCallback(response) {
              return response.data;
            }, function errorCallback(response) {
              return response.data; 
        });

     }

//dashBoard details Add Api

 	this.dashboardAdd = function(items) {

    console.log("dashboard Add Full Items",  items);

    return	$http({
            method: 'POST',
            url: 'json/dashboard.json',
            data:items
          }).then(function successCallback(response) {
              return response.data;
            }, function errorCallback(response) {
              return response.data; 
        });
    }

      this.dashboardAddDevice = function(items) {

    console.log("Add Device items",  items);

    return  $http({
            method: 'POST',
            url: 'json/dashboard.json',
            data:items
          }).then(function successCallback(response) {
              return response.data;
            }, function errorCallback(response) {
              return response.data; 
        });
    }

      this.dashboardAddNet = function(items) {

    console.log("Add net items",  items);

    return  $http({
            method: 'POST',
            url: 'json/dashboard.json',
            data:items
          }).then(function successCallback(response) {
              return response.data;
            }, function errorCallback(response) {
              return response.data; 
        });
    }

//dashBoard details Detete Api
     
     this.dashboardDelete = function() {
    return	$http({
            method: 'DELETE',
            url: 'json/dashboard.json',
            data:items
          }).then(function successCallback(response) {
              return response.data;
            }, function errorCallback(response) {
              return response.data; 
        });
     }


});