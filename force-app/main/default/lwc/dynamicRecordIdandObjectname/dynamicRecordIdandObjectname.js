import { LightningElement, api } from 'lwc';

export default class DynamicRecordIdandObjectname extends LightningElement {

    //we need to define with same case properties
    @api recordId;
    @api objectApiName;
}