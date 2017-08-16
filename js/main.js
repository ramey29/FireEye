var myApp = angular.module('XangularjsAppX',[]);


myApp.service('techRadarService',['$http',function($http){
this.getTechRadardata = function(){
	
 return $http.get('https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=b6e6c046741e4ebcac0307c897f39da6')
 .then(function(response){
   return response;
   
 })
}
}]);

myApp.controller('techRadar',['$scope', 'techRadarService', function($scope, techRadarService){
techRadarService.getTechRadardata().then(function(response){
 console.log(response.data.articles)
 $scope.radarGroup = response.data;
 $scope.articles = response.data.articles;
})

}]);