import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import {ShortenPipe} from '../pipes/shorten.pipe';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(
      environment.firebase, 'angular-kim')
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
