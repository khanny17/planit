angular.module('PlanitApp')

    .service('assignmentService', [function(){
        var self = this;
        self.assignments = [];
        self.completed = [];

        self.add = function(name, dueDate) {
            self.assignments.push({
                name: name,
                dueDate: dueDate
            });
        };

        self.get = function() {
            return self.assignments;
        };

        self.complete = function(assignment) {
            var index = self.assignments.indexOf(assignment);
            if (index > -1) {
                self.assignments.splice(index, 1);
            }
            self.completed.push(assignment);
        };

        self.incomplete = function(assignment) {
            var index = self.completed.indexOf(assignment);
            if (index > -1) {
                self.completed.splice(index, 1);
            }
            self.assignments.push(assignment);
        };

        self.getCompleted = function() {
            return self.completed;
        };
    }]);
