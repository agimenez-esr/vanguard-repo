public with sharing class showContactsService {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String recordId){
        return [SELECT Id, Name, Phone, Email FROM Contact WHERE AccountId = :recordId];
    }
    @AuraEnabled(cacheable=false)
    public static Boolean editContactPhone(String recordId, String phone){
        Boolean res;
        try {
            Contact c = new Contact();
            c.Id = recordId;
            c.Phone = phone;
            update c;
            res = true;
        } catch (Exception e) {
            res = false;
        }
        return res;
    }
}