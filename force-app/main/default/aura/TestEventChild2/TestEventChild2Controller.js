({
	makeCallout : function(component, event, helper) {
				console.log('Listening the event - make callout');
        var action = component.get("c.makecallout");
        action.setCallback(this,function(output){
            console.log("callout reponse");
            console.log(output.getState());
            component.set("v.response",output.getReturnValue());
        });
        $A.enqueueAction(action);

	}
})