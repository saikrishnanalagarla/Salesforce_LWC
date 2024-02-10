import { LightningElement } from 'lwc';


export default class ForeachLoop_inLWC extends LightningElement {
    fruits = ["apple", "banana", "orange", "lemon"];
    //complex object iteration
    userDetails = [
        {
            id :1,
            firstname : "rama",
            lastname : "krishna"
        },
        {
            id :2,
            firstname : "bala",
            lastname : "krishna"
        },
        {
            id :3,
            firstname : "vijay",
            lastname : "krishna"
        }
    ]
}