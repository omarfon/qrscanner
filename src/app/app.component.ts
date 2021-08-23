import { Component , ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { NotifierService } from 'angular-notifier';
import { ValidateCodeService } from './services/validate-code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit{

  @ViewChild(QrScannerComponent, {static:false}) qrScannerComponent: QrScannerComponent ;
  title = 'angular-qrscanner';
  public notifier;
  public loader = false;
  public data;
  public appointmenetId;
  public visible = true;
  public resultSearch;
  readonly VAPID_PUBLIC_KEY = "BOc4NRBzHbOOUpD734C6p0supHQGoEPH-HsVV-keE1i3mISOhiGd2vvX0NLNvsMwH_vyJjQZnPT4D-wx7_-6WjA";

  constructor(public notifierService: NotifierService, public validateService: ValidateCodeService) {
    this.notifier = notifierService;
  }

  ngOnInit(){

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
        console.log(result);
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
      this.loader = false;
    }, err => {
      console.log(err);
      this.resultSearch = err.error;
      this.loader = false;
      this.visible = false;
    })

  }


  sendMessage(){
      
  }

}
