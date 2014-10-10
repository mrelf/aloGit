var taskManager = angular.module('taskManager', ['ui.router']);

//main app routing settings
taskManager.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/create-task");
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('create-task', {
            name: 'create-task',
            url: '/create-task',
            templateUrl: 'partialViews/createTask.html',
            controller: 'CreateTaskController'
        })
        
        .state('in-progress', {
            name: 'in-progress',
            url: '/in-progress',
            templateUrl: 'partialViews/inProgress.html',
            controller: 'InProgressController'
        })
        
        .state('parked-out', {
            name: 'parked-out',
            url: '/parked-out',
            templateUrl: 'partialViews/parkedOut.html',
            controller: 'ParkedOutController'
        })
        
        .state('backlog', {
            name: 'backlog',
            url: '/backlog',
            templateUrl: 'partialViews/backlog.html',
            controller: 'BacklogController'
        })
});