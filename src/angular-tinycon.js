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
            return new anTinycon();
        };

        /**
         * Constructor for anTinycon with the public APIs
         */
        function anTinycon(){}

        /**
         * Set the bubble with the given number 
         * 
         * @param {int} number
         * @return {void}
         */
        anTinycon.prototype.setBubble = function(number) {
            Tinycon.setBubble(number);
        };

    });

}(angular, Tinycon));