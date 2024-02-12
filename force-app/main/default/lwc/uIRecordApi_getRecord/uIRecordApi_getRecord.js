import { LightningElement, api, wire } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

import ACCOUT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';
export default class UIRecordApi_getRecord extends LightningElement {
    //getRecord used to get field values  ,without uing apex
    @api recordId;
    name;
    revenue;
    @wire(getRecord, {recordId : "$recordId",
                     fields :[ACCOUT_NAME,ACCOUNT_AnnualRevenue]}) 
                     wiredFields({data , error}){
                        if(data){
                            //this.name = data.fields.Name.value;
                            //this.revenue = data.fields.AnnualRevenue.value;
                            //with the help of getFieldValue we can get direct value
                            this.name = getFieldValue(data ,ACCOUT_NAME );
                            this.revenue = getFieldValue(data, ACCOUNT_AnnualRevenue);
                        }
                        else if(error){
                            this.error = error;
                            this.name = undefined;
                        }
                    }

}