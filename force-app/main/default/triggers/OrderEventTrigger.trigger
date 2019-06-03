trigger OrderEventTrigger on Order_Event__e (after insert) {

// Trigger for listening to order  events.
    // List to hold all cases to be created.
    List<task> lstTask = new List<task>();
    
   
       
    // Iterate through each notification.
    for (Order_Event__e event : Trigger.New) {
        if (event.Has_Shipped__c == true) {
            // Crete Case to dispatch new team.
            task temptask = new task();
            temptask.Priority = 'Medium';
            temptask.Subject =  'Follow up on shipped order ' + event.Order_Number__c ;
            temptask.OwnerId = event.CreatedById;
            lstTask.add(temptask);
        }
   }
    
    // Insert all cases corresponding to events received.
    insert lstTask;
}