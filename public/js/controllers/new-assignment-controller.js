angular.module('PlanitApp')

    .controller('newAssignmentController', ['$scope', 'assignmentService', 'classService', '$uibModal', '$state', 
        function($scope, assignmentService, classService, $uibModal, $state){

            $scope.assignment = {
                dueDate: new Date()
            };
            $scope.classes = classService.getClasses() || [];

            if($scope.classes.length < 1) {
                //TODO redirect to the new class page
                var modal = $uibModal.open({
                    templateUrl: 'views/modals/no-classes-yet.html'
                });

                modal.closed.then(function(){
                    $state.go('inside.newclass');
                });
            };

            $scope.submit = function() {
                assignmentService.add($scope.assignment);
                $state.go('inside.home');
            };

            $scope.invalidForm = function() {
                if(!$scope.assignment.name) {
                    return true;	
                }
                if(!$scope.assignment.class) {
                    return true;	
                }
                if(!$scope.assignment.description) {
                    return true;	
                }
            };
        }]);
