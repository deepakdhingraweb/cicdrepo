({
	event1 : function(component, event, helper) {
		 console.log('!!!inside the log');
        try{
             console.log('!!!Pushing');
        var datalayer_Custom = component.get("v.dataLayer");
            datalayer_Custom.push({"event":"paymentmade","page_name": "About Me – Hey","form_section_name": "About Me",
"form_completion_rate": "5%"});
        component.set("v.dataLayer",datalayer_Custom);
            console.log('!!!pushed');
            console.log(datalayer_Custom);
        }catch(e){
            console.log(e);
        }
	},
    event2 : function(component, event, helper) {
		 console.log('!!!inside the log');
        try{
             console.log('!!!Pushing');
        var datalayer_Custom = component.get("v.dataLayer");
            datalayer_Custom.push({"event":"pagemoved","page_name": "About Me – Hey","form_section_name": "About Me",
"form_completion_rate": "5%"});
        component.set("v.dataLayer",datalayer_Custom);
            console.log('!!!pushed');
            console.log(datalayer_Custom);
        }catch(e){
            console.log(e);
        }
	}
})