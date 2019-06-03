({
	getLabelForRecord  : function(component,sObj) {
		var action = component.get("c.getSObjectLabel");
        action.setParams({sObjName:sObj});
	
            console.log(action);
            action.setCallback(this,function(response){
            var state = response.getState();
            
            var label = response.getReturnValue();
                console.log(JSON.stringify(label));
        });
                $A.enqueueAction(action);

    }
})