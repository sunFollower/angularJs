	var app=angular.module("myapp",[]);
	// app.controller("myCtrl",function($scope,$http){
 //      $http.get("service.html").then(function (response){
 //      	$scope.myWelcome=response.data;
 //      }) ;
	// });
   
	app.controller("myCtrl",function($scope,$timeout){
    $scope.myWelcome="hello world";
     $timeout(function(){
      $scope.myWelcome="hello churong";
     },2000);

	});

  app.controller("myCtrl1",function($scope,$interval){
    $scope.timetable=new Date().toLocaleTimeString();
    $interval(function(){
      $scope.timetable=new Date().toLocaleTimeString();
    },1000);
  });

//自定义服务
  app.service("hexchange",function(){
       this.myFunc=function(x){
         return x.toString(16);
       }    
  });
  app.controller("myCtrl2",function($scope,hexchange){
   $scope.change=function(){
     $scope.hex=hexchange.myFunc(parseInt($scope.number));
   }
 
  });

