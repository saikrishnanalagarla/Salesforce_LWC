import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class Lightning_uiObjectInfoApi_getObjectInfo extends LightningElement {

    accountInfo;
    errors;
    

    @wire(getObjectInfo ,
        { objectApiName : ACCOUNT_OBJECT}) 
        wiredObjectName({data , error}){
            if(data){
                console.log(data);
                this.accountInfo = data;
                this.errors = null;
            }
            else if(error){
                this.errors = error;
                this.accountInfo = undefined;
            }
    }
}