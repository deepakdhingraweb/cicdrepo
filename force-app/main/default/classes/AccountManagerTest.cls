@isTest
public class AccountManagerTest {
    @isTest static void testGetAccountById() {
Account acct = new Account(Name='Test Account 3', Phone='(415)555-8989', NumberOfEmployees=30, BillingCity='San Francisco', Test_External__c = '1234588');
upsert acct Test_External__c;


contact temp = new contact(lastname = 'DD',accountid=acct.id);
insert temp;
    // Set up a test request
RestRequest request = new RestRequest();
// Set request properties
request.requestUri =
    'https://lightdd-dev-ed.my.salesforce.com/services/apexrest/Accounts/'
    + acct.id + '/contacts';
request.httpMethod = 'GET';
// Set other properties, such as parameters
// more awesome code here....
// Finally, assign the request to RestContext if used
RestContext.request = request;
    Account acc = AccountManager.getAccount();
    }
}