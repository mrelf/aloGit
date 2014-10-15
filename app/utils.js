'use strict';


/*
save and get elements from localStorage
built as an angularJS service
*/
taskManager.factory('StoredLocally', function ($state, $rootScope) {
    var storedElem = {};
    
    storedElem.saveItem = function (lsKey, lsValue) {
            localStorage.setItem(lsKey, lsValue);
    }
    
    return storedElem;
});