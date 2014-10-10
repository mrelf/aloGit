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

//set active element on menu
taskManager.directive('setActiveMenu', function ($location) {
    return function (scope, element, attrs) {
        //variable list for function
        //var to hold all links in menu
        var links = element.find('a'),
            
            //var to keep current link item
            link,
            
            //var to keep href of current link item
            url,
            
            //object to keep list of urls href
            urlMap = {},
            
            //var to keep current link
            currentLink,
            
            //var to keep path link
            pathLink,
            
            //iterator
            i,
            
            //saved element from localStorage
            savedElem;
        
        //collect all links and hrefs
        for (i = 0; i < links.length; i++) {
            link = angular.element(links[i]);
            url = link.attr('href');
            urlMap[url] = link;
        }
        scope.$on('$routeChangeStart', function () {
            //bad place, as it gets one behind, because it always checks for localstorage item
            if (utils.localStorageItem.getElement('setActiveMenu') !== null){
                savedElem = utils.localStorageItem.getElement('setActiveMenu');
                savedElem = savedElem.replace(/"/g, "");
                pathLink = urlMap[savedElem];
            } else {
                pathLink = urlMap[$location.path()];
            }
            
            if (pathLink) {
                if (currentLink) {
                    currentLink.removeClass('active');
                }
                currentLink = pathLink;
                currentLink.addClass('active');
            }
            utils.localStorageItem.saveElement('setActiveMenu', $location.path());
        });
        
        
    };
});