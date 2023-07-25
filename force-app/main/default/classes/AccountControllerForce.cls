public with sharing class AccountControllerForce {
    public List<Account> accs { get; set; }
    
    public AccountControllerForce() {
        accs = [SELECT Name FROM Account LIMIT 5];
    }
}