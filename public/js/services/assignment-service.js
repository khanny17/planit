angular.module('PlanitApp')

    .service('assignmentService', [function(){
        var self = this;
        self.assignments = [];

        self.add = function(name, dueDate) {
            self.classes.push({
                name: name,
                dueDate: dueDate
            });
        };

        self.get = function() {
            return self.assignments;
        };

    }]);
