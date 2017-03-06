var app=angular.module('universidad-app',[]);
app.controller('profesorCtrl', function($scope){
    $scope.profesor={nombre:"David Rubio",edad:39,ciudad:"Zaragoza"}
    $scope.editar={};
    $scope.mostrar=false;

    $scope.EditarProfesor = function(){
        angular.copy($scope.profesor,$scope.editar);
        $scope.mostrar=true;
    }
 $scope.GuardarProfesor = function(){
        angular.copy($scope.editar,$scope.profesor);
            $scope.mostrar=false;
    }
 $scope.CancelarProfesor = function(){
      $scope.editar={};
          $scope.mostrar=false;
        }

});