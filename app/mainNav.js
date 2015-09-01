'use strict';

//***   NAV CONTROLLERS ***//
//  START create task controllers
taskManager.controller('CreateTaskController', function ($scope, $state, menuItems) {
    $scope.message = 'Create a new task';
    $scope.createTaskMenuItem = menuItems.createItemMenu;
});
//child controllers
taskManager.controller('AddTaskController', function($scope){
    $scope.message = 'add task';
});
//  END create task controllers
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
taskManager.controller('setActiveMenu', function ($scope, $state, $location, $rootScope, StoredLocally, menuItems) {
    
    $scope.menuItem = menuItems;
    
    var retrievedObj;
    if (StoredLocally.getItem('setActiveMenu') !== null) {
        retrievedObj = StoredLocally.getItem('setActiveMenu');
    } else {
        retrievedObj = 'create-task';
    }
    //set the state if it is saved in LS
    $state.transitionTo(retrievedObj);
    //get the current state
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $state.current = toState;
        var currentState = $state.current.name;
        StoredLocally.saveItem('setActiveMenu', currentState);
    });
});

