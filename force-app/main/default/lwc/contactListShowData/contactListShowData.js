import { LightningElement ,api} from 'lwc';

export default class ContactListShowData extends LightningElement {
    @api contact;
    clickHandler(event){
        //preventing anchor tag from navigation
        event.preventDefault();
    //creation and dispatching event sending selected Id 
        this.dispatchEvent(new CustomEvent('contactselection',{
            detail: this.contact.Id
        }
        ));
    }  
}