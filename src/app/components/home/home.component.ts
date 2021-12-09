import { Component , ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { NotifierService } from 'angular-notifier';
import { ValidateCodeService } from 'src/app/services/validate-code.service';
import { SaveDataService } from 'src/app/services/save-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  @ViewChild(QrScannerComponent, {static:false}) qrScannerComponent: QrScannerComponent ;
  title = 'angular-qrscanner';
  public notifier;
  public loader = false;
  public data;
  public appointmenetId;
  public visible = true;
  public resultSearch;
  readonly VAPID_PUBLIC_KEY = "BOc4NRBzHbOOUpD734C6p0supHQGoEPH-HsVV-keE1i3mISOhiGd2vvX0NLNvsMwH_vyJjQZnPT4D-wx7_-6WjA";

  constructor(public notifierService: NotifierService, 
    public validateService: ValidateCodeService,
    public saveDataSrv: SaveDataService) { 
      this.notifier = notifierService;
    }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0){
          let choosenDev;
          for (const dev of videoDevices){
              if (dev.label.includes('front')){
                  choosenDev = dev;
                  break;
              }
          }
          if (choosenDev) {
              this.qrScannerComponent.chooseCamera.next(choosenDev);
          } else {
              this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
          }
      }
  });

  this.qrScannerComponent.capturedQr.subscribe(result => {
      this.loader = true;
      this.visible = false;
        this.data = JSON.parse(result);
        this.appointmenetId = this.data.numberEncounter;
        console.log(result, this.data);
      console.log(result);
      console.log('verificación de pago');
        if(this.data){
            this.validateCode();
        }
    });
  }


  validateCode(){
    this.validateService.validateDni(this.appointmenetId).subscribe(data => {
      this.resultSearch = data;
      console.log(this.resultSearch);
      this.loader = false;
      this.saveData();
    }, err => {
      console.log(err);
      this.resultSearch = err.error;
      this.loader = false;
      this.visible = false;
    })
  }

  sendMessage(){
      
  }

  saveData(){
    let data = {
      nombreUsu:this.resultSearch.patientFullname,
      patientId: this.resultSearch.patientId,
      dateCita: this.resultSearch.appointmentDateTime,
      appointmentId:this.resultSearch.appointmentId,
      result: this.resultSearch.result,
      especialista:this.resultSearch.professionalFullname,
      especialidad:this.resultSearch.basicServiceDescription,
      bloque:'cura',
      consultorio:120,
      activity: false,
      llegada: false
    }
    console.log(data);
    this.saveDataSrv.saveData(data).then(resp =>{
      console.log(resp)
      return resp
    })
  }

}
