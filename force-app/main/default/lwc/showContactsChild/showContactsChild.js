import { LightningElement, api } from 'lwc';

export default class ShowContactsChild extends LightningElement {
    @api name;
    @api email;
    @api phone;
}