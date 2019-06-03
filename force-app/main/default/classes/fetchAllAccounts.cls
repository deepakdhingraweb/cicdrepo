public class fetchAllAccounts{

@AuraEnabled
public static Account[] getAllAccounts(){

return [select id,name,(select name from contacts) from account];


}

}