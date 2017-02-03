import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  SignInPage,
} from '../index';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  signUpDetails: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(details) {
    console.log(details);
  }

  viewSignInPage() {
    this.navCtrl.push(SignInPage);
  }

}
