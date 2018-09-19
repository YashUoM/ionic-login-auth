import { Component,  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  logInData={
    "username":"",
    "password":""
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  popThis(){
    this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }


  logIn() {
    

    if(this.logInData.username && this.logInData.password){
     
        let alert = this.alertCtrl.create({
          title: 'Log in status',
          subTitle: 'You have logged in successfully!',
          buttons: ['OK']
        });
        alert.present();
      }

      else{
        let alert = this.alertCtrl.create({
          title: 'Log in status',
          subTitle: 'Try again',
          buttons: ['OK']
        });
        alert.present();
      }
    
    }
}



