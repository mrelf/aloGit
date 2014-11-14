var taskManager = angular.module('taskManager', ['ui.router']);

//main app routing settings
taskManager.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('/', {
            name: '/',
            url: '/create-task',
            views: {
                'alo2': {
                    templateUrl: 'partialViews/submenuItems.html',
                    controller: 'submenuItemsController'
                },
                'alo': {
                    templateUrl: 'partialViews/createTask.html',
                    controller: 'CreateTaskController',
                },
            }
            
        })
        
        .state('in-progress', {
            name: 'in-progress',
            url: '/in-progress',
            views: {
                'alo': {
                    templateUrl: 'partialViews/inProgress.html',
                    controller: 'InProgressController'
                }
            }
        })
        
        .state('parked-out', {
            name: 'parked-out',
            url: '/parked-out',
            views: {
                'alo': {
                    templateUrl: 'partialViews/parkedOut.html',                    
                    controller: 'ParkedOutController'
                }
            }
        })
        
        .state('backlog', {
            name: 'backlog',
            url: '/backlog',
            views: {
                'alo': {
                    templateUrl: 'partialViews/backlog.html',        
                    controller: 'BacklogController'
                }
            }
        })
});