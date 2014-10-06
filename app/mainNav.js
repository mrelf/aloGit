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
            i;
        
        //collect all links and hrefs
        for (i = 0; i < links.length; i++) {
            link = angular.element(links[i]);
            url = link.attr('href');
            urlMap[url] = link;
        }
        scope.$on('$routeChangeStart', function () {
            if (utils.localStorageItem.elementContainer.indexOf('setActiveMenu') == -1) {
                //element not yet saved in localStorage
                pathLink = urlMap[$location.path()];
                //STORE DE OBJECT IN LOCALSTORAGE NOT THE STRING!!!!!!!!!!!
                //more info see console log
            }    
            //} else {
                //pathLink = urlMap[];   
                console.log(urlMap[$location.path()]);
            //}*/
            
            if (pathLink) {
                if (currentLink) {
                    currentLink.removeClass('active');
                }
                currentLink = pathLink;
                currentLink.addClass('active');
            }
            utils.localStorageItem.saveElement('setActiveMenu', urlMap[$location.path()]);
        })
    }
});