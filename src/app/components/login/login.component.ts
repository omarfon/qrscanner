import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaveDataService } from '../../services/save-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email;
  public password;
  public dataLoginSuccess;
  constructor(public router: Router, public savedataSrv: SaveDataService) { }

  ngOnInit(): void {
    this.getPublicKey();
  }

  getPublicKey() {
    this.savedataSrv.getKey().subscribe((data: any) => {
      console.log('data', data);
      const keypublic = data.authorization;
      const role = data.role;
      if (keypublic) {
        localStorage.setItem('authorization', keypublic);
        localStorage.setItem('role', role);
      }
    });
  }

  login() {
    let email = this.email;
    let password = this.password;
    if(email ===  'admisionista' && password === 'Aviva1234'){
      this.router.navigate(['/admision']);

    }else{

    }
    this.savedataSrv.login(email, password).subscribe(data => {
      this.dataLoginSuccess = data;
/*       if (this.dataLoginSuccess) {
        localStorage.setItem('dataDoctor', JSON.stringify(this.dataLoginSuccess));
        localStorage.setItem('authorization', this.dataLoginSuccess.authorization);
        localStorage.setItem('role', data.role);
      } */
    }, err => {
      let data = err;
      console.log('data error:', data);
      /* this.dialog.open(ErrologinComponent, { data })  */
      console.log('err', err);
    });
  }


  goToPatient(){
    localStorage.setItem('role', 'patient');
      this.router.navigate(['start']);
  }

}
