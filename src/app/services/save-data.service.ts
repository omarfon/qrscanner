import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { API_ENDPOINT } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  private SERVER = API_ENDPOINT
  private public_autho = `${this.SERVER}users/public-authorization`;
  private login_doc = `${this.SERVER}auth/login-doctor`;

  constructor(public afs: AngularFirestore, public http: HttpClient) {
    
   }

   getKey(){
    return this.http.get(this.public_autho).pipe(
      map(data =>{
        return data
      })
    )
  }

  login(email, password){
  
    let params = {username: email, password: password, app:"notas"};
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.post(this.login_doc, params, {headers}).pipe(
              map((resp:any)=>{
                return resp
              })/* .catch(e =>{
                console.log('error desde el servidor:',e);
              }) */
          )
  }

  saveData(data){
    const id = data.appointmentId;
    return this.afs.collection('llegada_admin').doc(id.toString()).set({
      data  },{merge:true})
  }

  getPacientes(){
    return this.afs.collection('llegada_admin').snapshotChanges();
  }

  llegadaAdmision(id){
    return this.afs.collection('llegada_admin').doc(id).set({
      data : {
        llegada: true,
        activity: true
      }
    }, { merge: true })
      .catch(err => {
        console.log('error de escritura en cita', err)
      });
  }

}
