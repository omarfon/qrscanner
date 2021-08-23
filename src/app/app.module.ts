import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { AdmisionComponent } from './components/admision/admision.component';
import { NotifierModule } from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AdmisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQrScannerModule,
    NotifierModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
