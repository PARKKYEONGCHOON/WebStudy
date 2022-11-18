var nameA = (function(){
    var privateVar  = '변수';
    return{
        publicApi : function(){
            console.log(privateVar);
        }
    }
})();

nameA.publicApi();