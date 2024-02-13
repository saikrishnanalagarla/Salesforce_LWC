import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class Lightning_uiObjectInfoApi_getPicklistValues extends LightningElement {

    //getPickListValues it accepts 2 paeamaters 1) recordTypeId 2) fieldApiName
     //for record type we need Object  info of Account and Field Api Name is "RecordTypeId"
    
     selectedValue;
     @wire(getObjectInfo,
    {
        objectApiName: ACCOUNT_OBJECT
    })  accountInfo;

    @wire(getPicklistValues ,
        {
            recordTypeId : '$accountInfo.data.defaultRecordTypeId',
            fieldApiName : ACCOUNT_INDUTRY_FIELD
        }) wiredPicklistValue;

        handleChange(event){
            this.selectedValue = event.target.value;
            console.log('Selected value '+this.selectedValue);
        }
}