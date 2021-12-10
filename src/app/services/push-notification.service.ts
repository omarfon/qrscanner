import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  currentMessage = new BehaviorSubject(null);

  constructor(public  angularFireMessaging: AngularFireMessaging, 

              public afs: AngularFirestore) {
   }



}
