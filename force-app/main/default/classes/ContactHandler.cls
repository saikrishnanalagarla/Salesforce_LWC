public with sharing class ContactHandler {

        @AuraEnabled(cacheable = true)
        public static List<Contact> getContacts(){
        return [SELECT  Id, Name, Phone, Email, PhotoUrl FROM Contact where photourl!=null LIMIT 10]; // Mock data for now.
    }
}