global class batchClass implements Database.batchable<sObject>{ 
   global Database.QueryLocator start(Database.BatchableContext info){ 
       return Database.getQueryLocator('select id,name from contact'); 
   }     
   global void execute(Database.BatchableContext info, List<contact> scope){
       List<contact> accsToUpdate = new List<contact>();
       for(contact a : scope){ 
           a.firstname = 'true_1'; 
          
           accsToUpdate.add(a); 
       } 
       update accsToUpdate; 
   }     
   global void finish(Database.BatchableContext info){     
   } 
}