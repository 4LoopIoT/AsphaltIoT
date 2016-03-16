var myApp = angular.module("Asphalt", ["firebase"]);

//ITESM, INTEL
		//GENERAL, VISITANTE		


myApp.controller("dataController", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray) {
          
          $scope.location = "";
          $scope.area = "";

          if ( $scope.location === null) {
          	var ref = new Firebase("https://letsparkiot.firebaseio.com/");
          	$scope.places = $firebaseArray(ref);
          } else if ( $scope.location != null && $scope.area === null) {
          	var ref = new Firebase("https://letsparkiot.firebaseio.com/" + $scope.location);
          	$scope.places = $firebaseArray(ref);
          }



          var ref = new Firebase("https://letsparkiot.firebaseio.com/");
          $scope.places = $firebaseArray(ref);
        }
]);

myApp.controller("areaController", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray) {
          var ref = new Firebase("https://letsparkiot.firebaseio.com/ITESM");
          $scope.places = $firebaseArray(ref);
        }
]);

myApp.controller("zoneController", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray) {
          var ref = new Firebase("https://letsparkiot.firebaseio.com/ITESM/General");
          $scope.places = $firebaseArray(ref);
        }
]);