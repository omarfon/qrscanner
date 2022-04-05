import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { SaveDataService } from 'src/app/services/save-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import Swal from 'sweetalert2'
import { ValidateCodeService } from '../../services/validate-code.service';
import * as moment from 'moment';
import 'moment/locale/es'

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
  public respuesta;
  public today;
  public pacientesHoy;

  constructor(public saveDataSrv: SaveDataService, 
              public pushNotificacion: PushNotificationService,
              private _notifications: NotificationsService,
              private _service: NotificationsService ,
              public validateSrv: ValidateCodeService,
              private _fb: FormBuilder) { 

                this.pushNotificacion.requestPermission().then(token => {
                  console.log(token)
                })

  }

  types = ['alert', 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];

  ngOnInit(): void {
    this.pushNotificacion.receiverMessage().subscribe(payload => {
      console.log(payload)
    })
    this.today = moment().format('YYYY-MM-DD');
    console.log(this.today);
    this.getAllReservas();
    this.createNotification();
    this.getPayed();

  }

  requestPermission(){
    this.pushNotificacion
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

  getPayed(){
    this.validateSrv.getDatesPayed().subscribe((data:any) => {
    /*   this.respuesta = data; */
      this.pacientesHoy = data.filter(x => x.FECHA == this.today);
      const fecha = data.sort((a:any,b:any) => <any> new Date(a.FECHA) - <any> new Date(b.FECHA));
      this.respuesta = fecha.sort((a:any,b:any) => (a.HORA) - (b.HORA));
      console.log(this.respuesta)
    })
  }

  marcAsist(p){
    const id = p.id;
    this.saveDataSrv.llegadaAdmision(id).then(data => {
        console.log(data);
        Swal.fire({
          title: 'Excelente!',
          text: 'Has dado llegada a este paciente',
          icon: 'success',
          confirmButtonText: 'Entiendo'
        })
    }, err =>{
      alert(err)
    })
  }

  createNotification(){
    this._notifications.success({
      title: 'Usuario fast pass llegada', 
      content: "Marca la llegada de paciente Fast pass", 
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
  });
  }
}
