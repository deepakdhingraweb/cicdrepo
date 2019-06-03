@RestResource(urlMapping='/Accounts/*')
global with sharing class AccountManager {
    @HttpGet
    global static Account getAccount() {
        RestRequest request = RestContext.request;
        // grab the caseId from the end of the URL
        String accountId = request.requestURI.substringBetween ('Accounts/','/contacts');
        System.debug('accountId -'+accountId);
        Account result =  [SELECT id,name,(select id,name from contacts) 
                        FROM account
                        WHERE Id = :accountId];
        return result;
    }
         
}