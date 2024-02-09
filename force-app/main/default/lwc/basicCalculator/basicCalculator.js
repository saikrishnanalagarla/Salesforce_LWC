import { LightningElement } from 'lwc';

export default class BasicCalculator extends LightningElement {

    numberone;
    numbertwo;
    result=0;
    
    handleChangeone(event){
        this.numberone=event.target.value;
    }
    handleChangetwo(event){
        this.numbertwo = event.target.value;
    }
    addClick(event){
        this.result = parseInt(this.numberone)+parseInt(this.numbertwo);
    }
    subClick(event){
        this.result = parseInt(this.numberone)-parseInt(this.numbertwo);
    }
    mulClick(event){
        this.result = parseInt(this.numberone)*parseInt(this.numbertwo);
    }
    divClick(event){
        this.result = parseInt(this.numberone)/parseInt(this.numbertwo);
    }

    handleClear(event){
        this.numberone=' ';
        this.numbertwo=' ';
        this.result= ' ';

    }
}