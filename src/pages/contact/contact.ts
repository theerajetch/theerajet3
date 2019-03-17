import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  /*items = ["nut","toey","mana","miv","thong"];*/
  items = [
    { "name" :"nut" , "tel" :"0815840643", "avatar" :"1.jpg"},
    { "name" :"miv" , "tel" :"0981321131", "avatar" :"2.jpg"},
    { "name" :"mana" , "tel" :"0954483254", "avatar" :"3.jpg"},
    { "name" :"toey" , "tel" :"0877122123", "avatar" :"4.jpg"},
    { "name" :"thong" , "tel" :"0914325231", "avatar" :"5.jpg"},
  ];
  itemSelected(item : string){
    console.log("Selected Item : ", item);
  }
  constructor(public navCtrl: NavController) {

  }

}
