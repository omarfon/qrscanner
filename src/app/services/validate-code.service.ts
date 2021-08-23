import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidateCodeService {

  public url = "https://dappapache02.eastus.cloudapp.azure.com/middleware2/api/v2/ebooking/appointments/validate-payed/"

  constructor(public http: HttpClient) { }


  validateDni(dateId){
    return this.http.get( this.url + dateId ).pipe(
      map(resp => {
        return resp
      })
    );
  }

}
