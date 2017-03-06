var app=angular.module('universidad-app',[]);
app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
   $scope.profesores={};

   $http.get('json/profesores.json')
   .then(function (respuesta){

       $scope.profesores=respuesta.data.profesores;
   })
   .catch(function (error) {
        $scope.profesores=error;
   });



}]);


