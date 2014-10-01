var taskManager = angular.module("taskManager", ['ngRoute']);

//main app routing settings
taskManager.config(['$locationProvider', '$routeProvider', 
    function($locationProvider, $routeProvider){
        //pretty urls
        $locationProvider.html5Mode(true);
        $routeProvider.
            when("/create-task", {
                templateUrl: "partialViews/createTask.html",
                controller: "CreateTaskController"
            }).
            when('/in-progress', {
                templateUrl: 'partialViews/inProgress.html',
                controller: 'InProgressController'
            }).
            when('/parked-out', {
                templateUrl: 'partialViews/parkedOut.html',
                controller: 'ParkedOutController'
            }).
            when('/backlog', {
                templateUrl: 'partialViews/backlog.html',
                controller: 'BacklogController'
            }).otherwise({
                redirectTo : '/create-task'
            });
    //TODO Create an error page for bad navigation
}]);