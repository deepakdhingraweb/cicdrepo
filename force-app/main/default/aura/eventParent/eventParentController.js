({
	myaction : function(component, event, helper) {
		console.log('Hey');
        var action = component.get("c.getAllAccounts");
        action.setCallback(this,function(response){
          var  status = response.getState();
            if(status==="SUCCESS"){
                console.log(response.getReturnValue());
                try{
                    component.set("v.allaccounts",response.getReturnValue());
                }catch(e)
                {
                    console.log(e);
                }
                
                
                
            }
        });
        $A.enqueueAction(action);
	},
    eventhandle:function(component, event, helper) {
        console.log('Wooho ! Hey you have reached the Event !!!');
    }
})