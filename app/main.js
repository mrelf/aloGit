var taskManager = angular.module('taskManager', ['ui.router', 'ngAnimate']);

//main app routing settings
taskManager.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        /***    START create task view ***/
        .state('create-task', {
            name: 'create-task',
            url: '/create-task',
            templateUrl: 'partialViews/createTask.html',
            controller: 'CreateTaskController'
        })
        /***    child views ***/
        .state('add-task', {
            parent: 'create-task',
            name: 'add-task',
            url: '/add-task', 
            views: {
                '@': {
                    templateUrl: 'partialViews/add-task.html',
                    controller: 'AddTaskController'        
                }
            }                
        })
        /***    END create task view ***/
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
    $urlRouterProvider.otherwise('/create-task');
});