angular.module('PlanitApp')

.controller('homeController', ['$scope', 'assignmentService', function($scope, assignmentService){
    $scope.assignments = assignmentService.get();
}]);
