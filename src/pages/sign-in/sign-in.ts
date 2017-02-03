import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  SignUpPage,
} from '../index';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  signInDetails: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signIn(details) {
    console.log(details);
  }

  viewSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }
  
}
