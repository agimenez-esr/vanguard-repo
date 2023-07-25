import { LightningElement, api, track } from 'lwc';

export default class CustomGreeting extends LightningElement {
	@api greeting;
    name;
    get customGreeting(){
        return (this.greeting ? this.greeting : '') + ' ' + (this.name ? this.name : '');
    }
    handleNameChange(event){
        this.name = event.target.value;
    }
}