import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_ENDPOINT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateCodeService {

  public url = API_ENDPOINT + 'ebooking/appointments/validate-payed/'

  constructor(public http: HttpClient) { }


  validateDni(dateId){
    return this.http.get( this.url + dateId ).pipe(
      map(resp => {
        return resp
      })
    );
  }

  getDatesPayed(){
    return this.http.get(API_ENDPOINT + 'ebooking/appointments/getPayedAppointments').pipe(
        map(resp => {
          return resp
        })
    );
  }

}
