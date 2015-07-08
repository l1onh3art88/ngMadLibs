var ngMadLibs =angular.module('ngMadLibs',['ngMessages']);
  ngMadLibs.controller('myCtrl', function($scope){
  $scope.male_name ="Bob";
  $scope.dirty_task="Stuff";
  $scope.obnoxious_celebrity="Paris Hilton";
  $scope.job_title="Basket Weaver";
  $scope.celebrity="Ariana Grande";
  $scope.huge_number=10000;
  $scope.tedious_task="Knitting";
  $scope.useless_skill="jumping over small distances";
  $scope.adjective="hilarious";
  $scope.madlibs = false;
  $scope.submit = function(){
    console.log($scope.madlibform);
    if( $scope.madlibform.$valid ) {
    console.log('The form is valid');
    }
    else {
    $scope.madlibs=false;
    console.log('The form is invalid');
   }
  };
  $scope.reset = function(){
    $scope.madlibform.$setValidity("required",false);
  }
});