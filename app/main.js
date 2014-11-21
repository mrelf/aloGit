var taskManager = angular.module('taskManager', ['ui.router']);

//main app routing settings
taskManager.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('/', {
            name: '/',
            url: '/create-task',
            views: {
                'submenu-container': {
                    templateUrl: 'partialViews/submenuItems.html',
                    controller: 'submenuItemsController'
                },
                'mainContent-container': {
                    templateUrl: 'partialViews/createTask.html',
                    controller: 'CreateTaskController',
                },
            }
            
        })
        
        .state('in-progress', {
            name: 'in-progress',
            url: '/in-progress',
            views: {
                'mainContent-container': {
                    templateUrl: 'partialViews/inProgress.html',
                    controller: 'InProgressController'
                }
            }
        })
        
        .state('parked-out', {
            name: 'parked-out',
            url: '/parked-out',
            views: {
                'mainContent-container': {
                    templateUrl: 'partialViews/parkedOut.html',                    
                    controller: 'ParkedOutController'
                }
            }
        })
        
        .state('backlog', {
            name: 'backlog',
            url: '/backlog',
            views: {
                'mainContent-container': {
                    templateUrl: 'partialViews/backlog.html',        
                    controller: 'BacklogController'
                }
            }
        })
});