angular.module('PlanitApp')

.controller('insideController', ['$scope', '$state', function($scope, $state){
    $scope.showMenu = false;

    $scope.links = [
        {
            name: 'inside.home',
            label: 'Home'
        },
        {
            name: 'inside.newAssignment',
            label: 'New Assignment'
        },
        {
            name: 'inside.newclass',
            label: 'New Class'
        }
    ];

    $scope.isCurrentState = function(stateName) {
        return $state.current.name === stateName;
    };

    $scope.go = function(stateName) {
        $scope.showMenu = false;
        $state.go(stateName);
    };
}]);
