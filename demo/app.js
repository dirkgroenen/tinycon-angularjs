angular.module("angularTinyConDemo", [
    "angularTinycon"
])

.config(function Appconfig(anTinyconProvider){
    anTinyconProvider.setOptions({
        a: 'b',
        c: 'd'
    });
})

.controller("AppController", function AppController($scope, anTinycon){
    var number = 0;

    $scope.increase = function(){
        number++;

        anTinycon.setBubble(number);
    };

    $scope.decrease = function(){
        number--;

        anTinycon.setBubble(number);
    };
});