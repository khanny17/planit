angular.module('PlanitApp')

    .controller('newAssignmentController', ['$scope', 'assignmentService', 'classService', '$uibModal', '$state', 
        function($scope, assignmentService, classService, $uibModal, $state){

            $scope.assignment = {};
            $scope.classes = classService.getClasses() || [];

            var defaultTime = new Date();
            defaultTime.setHours( 14 );
            defaultTime.setMinutes( 0 );

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
                assignmentService.add($scope.assignmentName, $scope.dt1);
                $state.go('inside.home');
            };

            $scope.invalidForm = function() {
                if(!$scope.assignmentName) {
                    return true;	
                }
                if(!$scope.class) {
                    return true;	
                }
                if(!$scope.description) {
                    return true;	
                }
            };

            $scope.days = [
                {
                    name: 'Monday',
                    active: false,
                    time: defaultTime,
                    duration: 60 //How long the class is, in minutes
                },
                {
                    name: 'Tuesday',
                    active: false,
                    time: defaultTime,
                    duration: 60
                },
                {
                    name: 'Wednesday',
                    active: false,
                    time: defaultTime,
                    duration: 60
                },
                {
                    name: 'Thursday',
                    active: false,
                    time: defaultTime,
                    duration: 60
                },
                {
                    name: 'Friday',
                    active: false,
                    time: defaultTime,
                    duration: 60
                }
            ];
        }]);
