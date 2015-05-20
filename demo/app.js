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


    anTinycon.setBubble(2);
});