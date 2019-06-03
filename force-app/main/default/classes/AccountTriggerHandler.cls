public class AccountTriggerHandler{

public static void CreateAccounts (List<Account> lstAccounts){
    for(account temp:lstAccounts){
        temp.ShippingState = temp.billingState;
        temp.name = 'Deepak Version';
        temp.name = 'Modified ide';
         temp.name = 'Modified online';
         temp.name = 'Addition on master';
    }
}

}