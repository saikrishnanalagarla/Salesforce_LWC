import { LightningElement, api } from 'lwc';

import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_EMAIL from '@salesforce/schema/Account.Email_ID__c';
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LightningRecordViewForm extends NavigationMixin(LightningElement) {

    @api recordId;
    @api objectApiName;

    fields= {
        Name :  ACCOUNT_NAME,
        Email : ACCOUNT_EMAIL,
        Rating : ACCOUNT_RATING
    }
    // on successful record creation redirecting to record detail page
    handleSuccess(event){
        console.log(event.detail);
        let pageRef= {
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: this.objectApiName,
                actionName: 'view'
            }
        };
        this[NavigationMixin.Navigate](pageRef);
    }
    //if any validation error occur showing message
    handleError(event){
        // Handle error here, for example: display an error message.
        const toastmsg = new ShowToastEvent({
            title : 'Error',
            message : 'Industry field  is required!',
            variant : 'error',
        });
        this.dispatchEvent(toastmsg);
    }
    // if Rating field is null then set it to "warm"
    handleSubmit(event){
        console.log('method start');
        event.preventDefault();// stoping  the form submission
        //checking in console weather details coming or not
        console.log(event.detail);
        console.log(JSON.stringify(event.detail));
        //stroring  the form data into a variable
        const fields= event.detail.fields;
        //check weather  rating filed is empty or not
        if(!fields.Rating){
            fields.Rating="Warm";
        }
       // confirm.log('after updation'+this.fields);
        //in the above line we are stoping form subbmission make it active
        this.template.querySelector("lightning-record-edit-form").submit(fields);
        //submit function only avilable in record edit form
    }
    //Reseting the field values
    handleReset(event){
        //get all input field values using QuerySelectorAll
        //it returns array
        let inputFields = this.template.querySelectorAll("lightning-input-field");
        //iterating the array
        inputFields.forEach((currItem)=>{
            currItem.reset();
        });
    }
}