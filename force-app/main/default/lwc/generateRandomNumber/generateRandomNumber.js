import { LightningElement } from 'lwc';

export default class GenerateRandomNumber extends LightningElement {
    number;
    handleAdd() {
        this.number = Math.floor(Math.random() * 1000);
    }
}