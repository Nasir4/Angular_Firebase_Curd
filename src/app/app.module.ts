import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const config = {
  apiKey: 'AIzaSyAb4akm_TuRHhxQLPVc25S7h8LEyZqiJJE',
  authDomain: 'logapp-8514a.firebaseapp.com',
  databaseURL: 'https://logapp-8514a.firebaseio.com',
  projectId: 'logapp-8514a',
  storageBucket: 'logapp-8514a.appspot.com',
  messagingSenderId: '1058867583912'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
