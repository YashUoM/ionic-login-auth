import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController) {

  }

  OpenFirstPage(){
    this.navCtrl.push(FirstPage);
  }

  OpenSecondPage(){
    this.navCtrl.push(SecondPage);
  }

}
