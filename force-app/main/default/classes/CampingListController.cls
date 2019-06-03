public without sharing class CampingListController {
// comment added here in local machine
    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        // Perform isAccessible() checking first, then
        return [SELECT Id, Name, Packed__c, Price__c, Quantity__c, CreatedDate 
                FROM Camping_Item__c order by createddate desc];
    }
    
    @AuraEnabled
    public static Account[] getAccounts() {
        // Perform isAccessible() checking first, then
        return [SELECT Id, Name, CreatedDate 
                FROM Account order by createddate desc];
    }
    
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item) {
        // Perform isUpdatable() checking first, then
        upsert item;
        return item;
    }
}