import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { SecondPage } from '../pages/second/second';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
  apiKey: "AIzaSyBbXAJpxXOJZRPOj2FRtmi-804BwynTa5s",
    authDomain: "test2blankionic-1e5ad.firebaseapp.com",
    databaseURL: "https://test2blankionic-1e5ad.firebaseio.com",
    projectId: "test2blankionic-1e5ad",
    storageBucket: "test2blankionic-1e5ad.appspot.com",
    messagingSenderId: "198789395681"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    SecondPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    SecondPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
