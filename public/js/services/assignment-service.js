angular.module('PlanitApp')

    .service('assignmentService', [function(){
        var self = this;
        self.assignments = [];
        self.completed = [];

        self.add = function(assignment) {
            self.assignments.push(assignment);
        };

        self.get = function() {
            return self.assignments;
        };

        self.delete = function(assignment) {
            var comIndex = self.completed.indexOf(assignment);
            if (comIndex > -1) {
                self.completed.splice(comIndex, 1);
            }
            var assignIndex = self.assignments.indexOf(assignment);
            if (assignIndex > -1) {
                self.assignments.splice(assignIndex, 1);
            }
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
