import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/showContactsService.getContacts';

export default class ShowContactsParent extends LightningElement {
    @api recordId;

	@wire(getContacts, { recordId: '$recordId' })
	contacts
}