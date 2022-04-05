import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { AdmisionComponent } from './components/admision/admision.component';
import { NotifierModule } from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { PushNotificationService } from './services/push-notification.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmisionComponent,
    HomeComponent,
    LoginComponent,
    StartComponent
  ],
  imports: [
  BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    APP_ROUTING,
    NgQrScannerModule,
    NotifierModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    MatProgressSpinnerModule,
    HttpClientModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
    NgbModule,
    MatMenuModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
