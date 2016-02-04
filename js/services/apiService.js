angular.module('dashboard.services')
.service('apiService',function($http){
    
//dashBoard details Get Api
 
    this.dashboardDetails = function() {
    return	$http.get("json/dashboard.json")
		.success(function(response)
   		 {
 			return response;
   		 });

     }
     
 //dashBoard details update Api
     
   this.dashboardUpdate = function(items) {
   	  console.log("items Updated :) ",  items);
    return	$http.post("json/dashboard.json")
		.success(function(response)
   		 {
 			return response;
   		 });

     }

//dashBoard details Add Api

 	this.dashboardAdd = function() {
    return	$http.post("json/dashboard.json")
		.success(function(response)
   		 {
 			return response;
   		 });

     }
     
     
//dashBoard details Detete Api
     
     this.dashboardDelete = function() {
    return	$http.delete("json/dashboard.json")
		.success(function(response)
   		 {
 			return response;
   		 });

     }


});