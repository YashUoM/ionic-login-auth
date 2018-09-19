import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  @ViewChild('uname') uname;
  @ViewChild('pword') pword;
  

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

    SignIn() {
      this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.pword.value)

      .then(data => {
          console.log('got data' ,data)
      })

      .catch(error =>{
        console.log('got an error',error)
      });
    console.log(this.uname.value, this.pword.value );
  }
  popThis(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

}
