public with sharing class ContactController {
    @AuraEnabled
    public static String getAccountName(String contactId) {
        Contact contact = [SELECT Account.Name FROM Contact WHERE Id = :contactId];
        return contact.Account.Name;
    }

    @AuraEnabled
    public static List<Contact> getContacts(String accountId) {
        return [SELECT Name, Email, Phone FROM Contact WHERE AccountId = :accountId];
    }
}