({
	linkclick : function(component, event, helper) {
            console.log('hey Link Clicked !!!');
            console.log(event);
        console.log(event.getName());
        console.log(event.getSource().get("v.target"));
        console.log('!!! Fire the event');
        try{
        var eve = component.getEvent("eventHandle");
        eve.setParams({"objid":event.getSource().get("v.target")});
        eve.fire();
            console.log('Event has been fired !!!');
        }catch(e)
        {console.log(e);}
	}
})