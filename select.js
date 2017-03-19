var app=angular.module("myapp",[]);
app.controller("myCtrl",function($scope){
	$scope.names=["google","baidu","souhu"];
});

app.controller("myCtrl1",function($scope){
	$scope.sites= [
	    {site : "Google", url : "http://www.google.com"},
	    {site : "Runoob", url : "http://www.runoob.com"},
	    {site : "Taobao", url : "http://www.taobao.com"}
	];
});

app.controller("myCtrl2",function($scope){
	$scope.sites={
		site01:{site:"Google",url: "http://www.google.com"},
		site02:{site:"Runoob",url: "http://www.runoob.com"},
		site03:{site:"Taobao",url:"http://www.taobao.com"}
	};
});