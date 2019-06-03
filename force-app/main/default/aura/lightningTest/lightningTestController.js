({
    
    //handle click function
    handleclick: function(component,event,helper){
        var sourcefired = event.getSource();
        console.log(sourcefired);
        console.log(sourcefired.get("v.label"));
        var btn = sourcefired.get("v.label");
       // component.set("v.message", btnMessage);
       console.log(component.get("v.sequence"));
       var previousValue = component.get("v.sequence") ;
        component.set("v.sequence",previousValue+ '-' +btn);
    }
    
})