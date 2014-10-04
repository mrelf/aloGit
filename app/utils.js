'use strict';
var utils = utils || {};

/*
save and get elements from localStorage
takes 2 params: keyElem and valueElem
*/
utils.localStorageItem = (function () {
    //assign localStorage to a var
    var localDB = window.localStorage,
    //create an array where to push keyElem to check later if they exist
        keyElemContainer = [];
    function save(keyElem, valueElem) {
        localDB.setItem(keyElem, valueElem);
        
        //check to see if keyElem already exists, if not push it to array
        if (keyElemContainer.indexOf(keyElem) < 0)
            keyElemContainer.push(keyElem);
    }
    function get(keyElem) {
        localDB.getItem(keyElem);
    }
    
    return {
        saveElement: save, //save elements to localStorage
        getElement: get,  //get elements from localStorage
        elementContainer: keyElemContainer  //array with all keyElems to check against
    };
}());