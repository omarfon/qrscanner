import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { SaveDataService } from 'src/app/services/save-data.service';


interface Paciente {
  name: string;
  apellido: string;
  especialidad: string;
  document: string;
  activity: boolean;
}


@Component({
  selector: 'app-admision',
  templateUrl: './admision.component.html',
  styleUrls: ['./admision.component.scss']
})
export class AdmisionComponent implements OnInit {
  
  public pacientes;

  constructor(public saveDataSrv: SaveDataService, 
              public pushNotificacion: PushNotificationService) { 

  }

  ngOnInit(): void {
    this.getAllReservas();

  }

  getAllReservas(){
    this.saveDataSrv.getPacientes().subscribe((data:any) => {
      this.pacientes = data.map(x => {
        const datos = x.payload.doc.data();
        datos.id = x.payload.doc.id;
        return datos
      })
      console.log(this.pacientes);
    })
  }

}
