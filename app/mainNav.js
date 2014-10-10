'use strict';
//main nav controllers
taskManager.controller('CreateTaskController', function ($scope) {
    $scope.message = 'Create a new task';
});

taskManager.controller('InProgressController', function ($scope) {
    $scope.message = 'In progress';
});

taskManager.controller('ParkedOutController', function ($scope) {
    $scope.message = 'parked out';
});

taskManager.controller('BacklogController', function ($scope) {
    $scope.message = 'backlog';
});

//save state to localStorage
taskManager.controller('setActiveMenu', function ($scope, $state, $location) {
    console.log($location);
});