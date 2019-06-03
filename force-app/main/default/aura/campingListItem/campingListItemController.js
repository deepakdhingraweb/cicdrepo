({
	packItem : function(component, event, helper) {
		var item_get = component.get("v.item");
        console.log(item_get);
        item_get.Packed__c  = true;
        component.set("v.item",item_get);
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled",true);
	}
})