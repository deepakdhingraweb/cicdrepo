({
	createButton : function(component, event, helper) {
        	console.log('buttoncreationInitiated');
		   
        var findingNemo = document.getElementsByTagName('script');
        console.log('findingallscripts');
        console.log(findingNemo);
        var ele_mynode=findingNemo[1];
        console.log('ele_mynode parent');
        console.log(ele_mynode.parentNode);
        
	}
})