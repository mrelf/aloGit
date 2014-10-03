var utils = utils || {};

utils.localStorageItem = (function(){
    function alo(){
        return alert('alo');  
    }
    function alo2(strings){
        return alert(strings);
    }
    
    return {
        aloMe: alo,
        aloMeTwo: alo2
    };
})();