'use strict';


/*
save and get elements from localStorage
built as an angularJS service
*/
taskManager.factory('localStorageFactory', function localStorageFactory(){
    return {
        halo: function(){
            alert('alo');
        }
    }
})