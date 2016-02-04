angular.module('dashboard.services')
.service('apiService',function($http){
    this.dashboardDetails = function() {
    return	$http.get("json/dashboard.json")
		.success(function(response)
   		 {
 			return response;
   		 });

     }
   this.dashboardUpdate = function(items) {
   	  console.log("items Updated :) ",  items);
    return	$http.post("json/dashboard.json")
		.success(function(response)
   		 {
 			return response;
   		 });

     }

 	this.dashboardAdd = function() {
    return	$http.post("json/dashboard.json")
		.success(function(response)
   		 {
 			return response;
   		 });

     }


});