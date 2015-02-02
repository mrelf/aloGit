'use strict';
//main nav controllers
taskManager.controller('CreateTaskController', function ($scope, $state) {
    $scope.message = 'Create a new task';
    $scope.submenuItems = [
        {itemUrl: '#', itemText: 'Item One'},
        {itemUrl: '#', itemText: 'Item Two'},
        {itemUrl: '#', itemText: 'Item Three'}
    ]
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

taskManager.controller('submenuItemsController', function($scope){
    $scope.message = 'submenu Item';
});

//save state to localStorage
taskManager.controller('setActiveMenu', function ($scope, $state, $location, $rootScope, StoredLocally) {
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