import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import firebase from 'firebase';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  messagingFirebase : firebase.messaging.Messaging
  constructor() {
                    if (!firebase.apps.length) {
                      /* firebase.initializeApp({}); */
                      firebase.initializeApp(environment.firebaseConfig);
                  }else {
                      firebase.app(); // if already initialized, use that one
                  }
                this.messagingFirebase = firebase.messaging();
   }

   requestPermission=() => {
     return new Promise(async (resolve, reject) => {
      const permis = await Notification.requestPermission();
          if(permis === "granted"){
            const tokenFirebase = this.messagingFirebase.getToken();
            resolve(tokenFirebase)
          }else{
            reject('No se otorgaron los permisos')
          }
     })
   }

   private messaginObservable = new Observable( observe => {
     this.messagingFirebase.onMessage(payload => {
       observe.next(payload)
     })
   })

   receiverMessage(){
     return this.messaginObservable;
   }


}
