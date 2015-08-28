'use strict';

//main nav controllers
taskManager.controller('CreateTaskController', function ($scope, $state) {
    $scope.message = 'Create a new task';
    $scope.$parent.alo = true;
});

taskManager.controller('InProgressController', function ($scope) {
    $scope.message = 'In progress';
    $scope.$parent.alo = false;
});

taskManager.controller('ParkedOutController', function ($scope) {
    $scope.message = 'parked out';
    $scope.$parent.alo = false;
});

taskManager.controller('BacklogController', function ($scope) {
    $scope.message = 'backlog';
    $scope.$parent.alo = false;
});

taskManager.controller('submenuItemsController', function($scope){
    $scope.message = 'submenu Item';
    $scope.$parent.alo = false;
});

taskManager.controller('alo11', function($scope){
    $scope.message = 'Item';
});

//save state to localStorage
taskManager.controller('setActiveMenu', function ($scope, $state, $location, $rootScope, StoredLocally, menuItems) {
    
    $scope.menuItem = menuItems;
    
    var retrievedObj;
    if (StoredLocally.getItem('setActiveMenu') !== null) {
        retrievedObj = StoredLocally.getItem('setActiveMenu');
    } else {
        retrievedObj = '/';
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

