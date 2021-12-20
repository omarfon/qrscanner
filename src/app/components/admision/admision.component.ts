import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { SaveDataService } from 'src/app/services/save-data.service';
import Swal from 'sweetalert2'

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

  marcAsist(p){
    const id = p.id;
    this.saveDataSrv.llegadaAdmision(id).then(data => {
        console.log(data);
        Swal.fire({
          title: 'Exzcelente!',
          text: 'Has dado llegada a este paciente',
          icon: 'success',
          confirmButtonText: 'Entiendo'
        })
    }, err =>{
      alert(err)
    })
  }
}
