({
	myAction : function(component, event, helper) {
       
       
		var action= component.get("c.getAccounts");
        action.setCallback(this,function(response){
            
          var state = response.getState();
            if(state === "SUCCESS"){
                 console.log("!!!");
                console.log(response.getReturnValue().length);
                var i; 
                for (i = 0; i < response.getReturnValue().length; i++) { 
                      var account_temp = response.getReturnValue()[i];
                      console.log(account_temp);
                
                    }
             
                
                 component.set("v.accounts",response.getReturnValue());
                 console.log("!!!");
            }
        });
        $A.enqueueAction(action);
	}
   
})