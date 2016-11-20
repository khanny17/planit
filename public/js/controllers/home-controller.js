angular.module('PlanitApp')

.controller('homeController', ['$scope', 'assignmentService', function($scope, assignmentService){
    $scope.assignments = assignmentService.get();
    $scope.completedAssignments = assignmentService.getCompleted();

    $scope.go = function(assignment) {
        alert("GO!");
    };

    $scope.complete = function(assignment) {
        assignmentService.complete(assignment);
        $scope.assignments = assignmentService.get();
        $scope.completedAssignments = assignmentService.getCompleted();
    };

    $scope.incomplete = function(assignment) {
        assignmentService.incomplete(assignment);
        $scope.assignments = assignmentService.get();
        $scope.completedAssignments = assignmentService.getCompleted();
    };

    $scope.remove = function(assignment) {
        assignmentService.delete(assignment);
        $scope.assignments = assignmentService.get();
        $scope.completedAssignments = assignmentService.getCompleted();
    };
}]);
