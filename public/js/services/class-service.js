angular.module('PlanitApp')

    .service('classService', [function(){
        var self = this;
        self.classes = [];

        self.addClass = function(name, days) {
            self.classes.push({
                name: name,
                days: days
            });
        };

        self.getClasses = function() {
            return self.classes;
        };

    }]);
