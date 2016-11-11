angular.module('PlanitApp')

    .service('assignmentService', [function(){
        var self = this;
        self.assignments = [];

        self.add = function(assignment) {
            self.assignments.push(assignment);
        };

        self.get = function() {
            return self.assignments;
        };

    }]);
