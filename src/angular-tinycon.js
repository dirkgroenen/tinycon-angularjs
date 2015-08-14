(function(angular, Tinycon){
    "use strict";

    angular.module('angularTinycon', [
    ])

    .provider("anTinycon", function anTinyconProvider(){

        /**
         * Sets the Tinycon options
         * 
         * @param {Object} options
         * @return {void}
         */
        this.setOptions = function(options){
            Tinycon.setOptions(options);
        };

        /**
         * Return the service accessible methods 
         * 
         * @return {object}
         */
        this.$get = function(){
            return new AnTinycon();
        };

        /**
         * Constructor for anTinycon with the public APIs
         */
        function AnTinycon(){}

        /**
         * Set the bubble with the given number 
         * 
         * @param {int} number
         * @return {void}
         */
        AnTinycon.prototype.setBubble = function(number) {
            Tinycon.setBubble(number);
        };

        /**
         * Reset the favicon
         * 
         * @return {void}
         */
        AnTinycon.prototype.reset = function() {
            Tinycon.reset();
        };

        /**
         * Sync a scope key with the bubble
         * 
         * @param  {$rootScope|$scope} scope
         * @param  {string} key
         * @return {void}
         */
        AnTinycon.prototype.bind = function(scope, key){
            var that = this;

            scope.$watch(key, function(newValue){
                that.setBubble(newValue);
            });
        };

    });

}(angular, Tinycon));