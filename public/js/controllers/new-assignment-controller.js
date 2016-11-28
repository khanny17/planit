angular.module('PlanitApp')

    .controller('newAssignmentController', ['$scope', 'assignmentService', 'classService', '$uibModal', '$state', 
        function($scope, assignmentService, classService, $uibModal, $state){

            $scope.assignment = {
                dueDate: new Date()
            };
            
            $scope.classes = classService.getClasses() || [];

            $scope.addClass = function(){
                var modal = $uibModal.open({
                    templateUrl: 'views/modals/new-class.html',
                    controller: ['$scope', function($modalScope) {
                        $modalScope.add = function() {
                            classService.addClass($modalScope.name);
                            modal.close();
                        };
                        
                        $modalScope.cancel = modal.close;
                    }]
                });

                modal.closed.then(function(){
                    $scope.classes = classService.getClasses() || [];
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
