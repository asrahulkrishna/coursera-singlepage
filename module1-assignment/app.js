(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('lunchChecker', lunchChecker);

lunchChecker.$inject = ['$scope'];

function lunchChecker($scope){

$scope.name="";

  $scope.$watch('name', function(text) {

    if(!text) {
        $scope.wordCount = 0;
          $scope.message="Please enter your lunch items.";

    }
    else {

        var matches = text.split(",");
        $scope.wordCount =  matches.length ;

        $scope.check = function(){


if ($scope.wordCount== 0 ) {
    $scope.message="Please enter data first";

}else if($scope.wordCount<=3){
  $scope.message="Enjoy your lunch:)";
}
else if($scope.wordCount>3){
  $scope.message="Too Much!";
}



};
    }





});

// $scope.name="";
// var string=$scope.name;
// var arr=string.split(',');
// var size=arr.length;
// console.log(size);




}

})();
