var myapp=angular.module("myApp",[]);
myapp.controller("myCtrl",function($scope){
	$scope.names=[{firstname:'chu',lastname:'褚'},
                  { firstname:'dong',lastname:'柳'},
	              {firstname:'xu',lastname:'是'}];
});