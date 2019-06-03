({
	createBattam : function(component, event, helper) {
         var comm100_lc_light = component.get("v.comm100_lc_light");
        var comm100_s_light = component.get("v.comm100_s_light");
		console.log('!!!!!! - comm100_lc_light' );
        console.log(JSON.toString(comm100_lc_light));
        console.log('!!!!!! - comm100_s_light' );
        console.log(JSON.toString(comm100_s_light));
        try{
            console.log('!!!!!! - inserting before parent node' );
            comm100_s_light.parentNode.insertBefore(comm100_lc_light, comm100_s_light);
        }catch(ex_obj){
            console.log('!!!!!! - exception before parent node' );
            console.log(ex_obj);
        }
        console.log('!!!!!! - create battam complted' );
	}
})