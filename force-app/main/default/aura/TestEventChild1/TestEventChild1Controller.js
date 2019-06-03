({
	makeDML : function(component, event, helper) {
		console.log('Listening the event - make dml');
        var action = component.get("c.dodml");
        action.setCallback(this,function(output){
             console.log("Call out response");
            console.log(output.getState());
        });
        action.setBackground();
        $A.enqueueAction(action);
        
	}
})