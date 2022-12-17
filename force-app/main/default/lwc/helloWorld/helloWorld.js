import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
// Data binding example
    fullname= "Zero to Heros"
   title="aura"
     changeHandler(event){
     this.title =event.target.value
    }
    //@track
    @track address ={
 city:'Melbourne',
 postcode:3008,
 country:'Australia'

     }
     trackHandler(event){
     this.address.city=event.target.value
    }
// getter example
users = ["Jhon", "Smith", "Nik"]
num1=10
num2=20
get firstUser(){
  return this.users[0]  
}
get multiply(){
    return this.num1*this.num2
}
}