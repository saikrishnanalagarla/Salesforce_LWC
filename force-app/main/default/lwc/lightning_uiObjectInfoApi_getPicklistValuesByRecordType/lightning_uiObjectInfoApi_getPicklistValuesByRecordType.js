import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';


export default class Lightning_uiObjectInfoApi_getPicklistValuesByRecordType extends LightningElement {

    @wire(getObjectInfo,
        {
            objectApiName: ACCOUNT_OBJECT
        })  accountInfo;

        @wire(getPicklistValuesByRecordType, 
            {
                objectApiName : ACCOUNT_OBJECT,
                recordTypeId : '$accountInfo.data.defaultRecordTypeId'
            }) recordPicklistTypes;
    // To demo the error handling in a wire adapter, we are purposefully setting
            /*({data , error}){
                if(data){
                    console.log(data);
                }
                else if(error){
                    console.log(error);
                }
            }*/
}