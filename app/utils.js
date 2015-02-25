'use strict';


/*
save and get elements from localStorage
built as an angularJS service
*/
taskManager.factory('StoredLocally', function ($state, $rootScope) {
    var storedElem = {};
    
    storedElem.saveItem = function (lsKey, lsValue) {
        localStorage.setItem(lsKey, JSON.stringify(lsValue));
    }
    
    storedElem.getItem = function(lsKey) {
        var retrievedObject = localStorage.getItem(lsKey);
        return JSON.parse(retrievedObject);
    }
    
    return storedElem;
});
taskManager.factory('retrieveJsonFactory', function($http, $q){
    function getDataService() {
        var self = this;
        
        self.data = null;
        
        self.getData = function() {
            
            
            $http.get('../data/menu.json')
                .then(function(response){
                    self.data = response.data;
                    console.log(self.data);
                })
            return self.data;
        }
        
    }
    return new getDataService();
})