angular.module('PlanitApp')

    .service('classService', [function(){
        var self = this;
        self.classes = [];

        self.addClass = function(name) {
            self.classes.push(name);
        };

        self.getClasses = function() {
            return self.classes;
        };

    }]);
