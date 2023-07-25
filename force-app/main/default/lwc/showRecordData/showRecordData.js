import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class ShowRecordData extends LightningElement {
    @api recordId;
    @api objectApiName;
    showFields = [NAME_FIELD];

    @wire(getRecord, { recordId: '$recordId', fields: [PHONE_FIELD] })
    account;

    get phone() {
        return getFieldValue(this.account.data, PHONE_FIELD);
    }
}