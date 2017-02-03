import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  SignInPage,
  SignUpPage,
} from '../index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.items = [1,2,3,4,5];
  }

  itemSelected(item) {
    console.log(item);
  }

  viewSignInPage() {
    this.navCtrl.push(SignInPage);
  }

  viewSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }
}
