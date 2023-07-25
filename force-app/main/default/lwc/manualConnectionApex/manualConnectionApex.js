import { LightningElement, api } from 'lwc';
import getContacts from '@salesforce/apex/showContactsService.getContacts';
import editContactPhone from '@salesforce/apex/showContactsService.editContactPhone';

export default class ManualConnectionApex extends LightningElement {
    @api recordId;
	contacts

    handleGetData() {
        getContacts({ recordId: this.recordId })
			.then((result) => {
				if (result) {
					this.contacts = result;
				}
			})
			.catch((error) => {
				console.log("Error: ", error);
			});
    }
    handleSaveData(event) {
        let selectedId = event.currentTarget.dataset.id;
        let input = this.template.querySelector("[data-inputid='"+selectedId+"']");
        let editedPhone = input.value;
        editContactPhone({ recordId: selectedId, phone: editedPhone })
			.then((result) => {
                if (result) {
                    alert('Contacto modificado correctamente');
                    eval("$A.get('e.force:refreshView').fire();");
                } else {
                    alert('Error modificando el contacto');
                }
			})
			.catch((error) => {
				console.log("Error: ", error);
			});
    }
}