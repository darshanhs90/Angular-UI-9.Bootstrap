var app=angular.module("myApp",['ui.bootstrap']);
app.controller("MainController",function($scope){
    $scope.sections=[
        {heading:'first sec',content:'asdasdasd'},
        {heading:'second sec',content:'22222222222'},
        {heading:'third sec',content:'333333333'}
    ]
});
