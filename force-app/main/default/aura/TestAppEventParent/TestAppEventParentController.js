({
    handleClick : function(component){
        console.log('button clicked - event fired');
        var cmpEvent = $A.get("e.c:TestAppEvent");
        cmpEvent.fire();

    }
})