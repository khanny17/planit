angular.module('PlanitApp')

    .service('assignmentService', [function(){
        var self = this;
        self.assignments = [];

        self.add = function(name, dueDate) {
            self.assignments.push({
                name: name,
                dueDate: dueDate
            });
        };

        self.get = function() {
            return self.assignments;
        };

    }]);
