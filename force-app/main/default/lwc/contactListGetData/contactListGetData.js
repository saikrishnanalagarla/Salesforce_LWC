import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactHandler.getContacts';
export default class ContactListGetData extends LightningElement {
 
    //getting data from apex class  using @wire decorator
    @wire(getContacts)contacts;
    selectedContact;
    //getting event and fetching data from that event and storing data(Selected Id) into one variable
    clickselectionHandler(event){
        let selectedContactId = event.detail;
        console.log('selected contact id: ', selectedContactId);
    //fetching record details from contacts and storing those data into one variable
    this.selectedContact = this.contacts.data.find((curritem)=> curritem.Id === selectedContactId);
    }
}