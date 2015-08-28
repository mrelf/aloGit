var taskManager = angular.module('taskManager', ['ui.router', 'ngAnimate']);

//main app routing settings
taskManager.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('create-task', {
            name: 'create-task',
            url: '/create-task',
            
                
                    templateUrl: 'partialViews/createTask.html',
                    controller: 'CreateTaskController'
                
            
            
        })
        
        .state('add-task', {
            parent: 'create-task',
            name: 'add-task',
            url: '/add-task',
            
                
                    templateUrl: 'partialViews/alo.html',
                    controller: 'alo11'
                
            
            
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