import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  constructor(public afs: AngularFirestore) {
    
   }


  saveData(data){
    const id = data.appointmentId;
    return this.afs.collection('llegada_admin').doc(id.toString()).set({
      data  },{merge:true})
  }

  getPacientes(){
    return this.afs.collection('llegada_admin').snapshotChanges();
  }

}
