var app=angular.module('universidad-app',[]);
app.controller('profesorCtrl', function($scope){
    $scope.datos=["David Rubio","Sergio Rubio","Sergio Javier Rubio"];
    $scope.pais=2;
    $scope.datos2= [{nombre:"David Rubio",edad:39,ciudad:"Zaragoza"},
    {nombre:"Sergio Rubio",edad:32,ciudad:"Zaragoza"},
    {nombre:"Sergio Javier Rubio",edad:5,ciudad:"Zaragoza"}
    
];

    $scope.paises =
    [
        {id:1,nombre:"España"},
        {id:2,nombre:"Irlanda"},
        {id:3,nombre:"EEUU"}
    ]
  ;
});