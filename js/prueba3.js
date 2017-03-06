var app=angular.module('universidad-app',[]);
app.controller('profesorCtrl', function($scope){
    $scope.datos=["David Rubio","Sergio Rubio","Sergio Javier Rubio"];
    
    $scope.datos2= [{nombre:"David Rubio",edad:39,ciudad:"Zaragoza"},
    {nombre:"Sergio Rubio",edad:32,ciudad:"Zaragoza"},
    {nombre:"Sergio Javier Rubio",edad:5,ciudad:"Zaragoza"}
    
    ]

});