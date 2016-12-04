angular.module('PlanitApp')

.controller('homeController', ['$scope', '$uibModal', 'assignmentService', function($scope, $uibModal, assignmentService){
    $scope.assignments = assignmentService.get();
    $scope.completedAssignments = assignmentService.getCompleted();

    $scope.go = function(assignment) {
        alert("GO!");
    };

    $scope.editAssignment = function(assignment){
        $scope.currAssignment = assignment;
        var modal = $uibModal.open({
            templateUrl: 'views/modals/edit-assignment.html',
            controller: 'homeController'
        });
    };

    $scope.save = function () {
        alert("saving");
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

    $scope.edit = function(assignment) {

    };
}]);
