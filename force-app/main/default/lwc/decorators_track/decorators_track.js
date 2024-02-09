import { LightningElement, track } from 'lwc';

export default class Decorators_Track extends LightningElement {
    //@track decorator
    fullname = {fname : "krishna", lname : "sai"}
    handleClick(event){
        this.fullname.fname='Pawan kalyan';
    }
    //rerender not working with objects it works only with primitive types

  @track  Fruits = { apple : "Fruit" , banana : "Vegetable"};

    handleChange(){
        this.Fruits.banana="Fruit";
    }
    




}