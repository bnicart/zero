import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {
  HomePage,
  SignInPage,
  SignUpPage,
  MapPage,
} from '../pages/index';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform) {
    this.initializeApp(platform);

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Sign In', component: SignInPage, icon: 'log-in' },
      { title: 'Sign Up', component: SignUpPage, icon: 'person-add' },
      { title: 'Map', component: MapPage, icon: 'map' },
    ];

  }

  initializeApp(platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  signOut() {
    console.log("See yah again later! :)")
  }
}
