angular.module('PlanitApp')

.controller('newAssignmentController', ['$scope', 'assignmentService', function($scope, assignmentService){

    $scope.submit = function() {
        assignmentService.add(assignmentName);

    };
}]);
