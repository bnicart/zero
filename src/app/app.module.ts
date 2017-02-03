import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {
  HomePage,
  SignInPage,
  SignUpPage,
  MapPage,
} from '../pages/index';

const pages = [
  HomePage,
  SignInPage,
  SignUpPage,
  MapPage,
];

const components = [];

@NgModule({
  declarations: [
    MyApp,
    pages,
    components,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pages,
    components,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
