var myApp = angular.module('XangularjsAppX',[]);


myApp.service('techRadarService',['$http',function($http){
this.getTechRadardata = function(){
	
 return $http.get('https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=b6e6c046741e4ebcac0307c897f39da6')
 .then(function(response){
   return response;
   
 })
};

}]);

myApp.service('nYTimesService',['$http',function($http){
this.getNYTimesdata = function(){
	
 return $http.get('https://newsapi.org/v1/articles?source=techradar&sortBy=latest&apiKey=b6e6c046741e4ebcac0307c897f39da6')
 .then(function(response){
   return response;
   
 })
};

}]);

myApp.controller('techRadar',['$scope', 'techRadarService', 'nYTimesService' , function($scope, techRadarService, nYTimesService){
	$scope.articles = [];
	$scope.api1 = function(){
		 techRadarService.getTechRadardata().then(function(response){
		 
		 $scope.radarGroup = response.data;
		 $scope.articles = response.data.articles;
		});
};
$scope.api1();
$scope.api2 = function(){
		nYTimesService.getNYTimesdata().then(function(response){
		 console.log(response.data)
		 $scope.NYGroup = response.data;
		 $scope.articles = response.data.articles;
		});
		

$scope.addTweet = function () {

        $scope.articles.push({
            author: 'RameshwarBishnoi',
            title: $scope.tweet,
			publishedAt: '2017-08-16T11:11:00.227Z',
			urlToImage:"http://www.gratisography.com/pictures/417_1.jpg"
        });

        // Clear input fields after push
        $scope.tweet = "";
       

    };
};


}]);

