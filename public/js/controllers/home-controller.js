angular.module('PlanitApp')

.controller('homeController', ['$scope', 'assignmentService', function($scope, assignmentService){
    $scope.assignments = assignmentService.get();
    $scope.completedAssignments = assignmentService.getCompleted();

    $scope.go = function(assignment) {
        alert("GO!");
    };

    $scope.complete = function(assignment) {
        //$scope.$apply(function(assignment) {
            assignmentService.complete(assignment);
            $scope.completedAssignments = assignmentService.getCompleted();
        //});
    };

    $scope.incomplete = function(assignment) {
        //$scope.$apply(function(assignment) {
            assignmentService.incomplete(assignment);
            $scope.assignments = assignmentService.get();
        //});
    };
}]);
