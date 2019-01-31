import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  emailId = '';
  password = '';
  user: object;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  login() {
    console.log('Email id : ', this.emailId);
    console.log('Password : ', this.password);
    console.log('Calling Service');
    this.data.loginServive();
    this.data.httpService().subscribe(data => {
      this.user = data;
        console.log('Object : ', this.user);
      });
    this.data.httpPostService().subscribe(data => {
      console.log('Response from post request : ', data);
    });
/*http post service with parameter*/
    this.data.httpPostServiceParam(this.emailId, this.password).subscribe(data => {
      console.log('Response from post request : ', data);
    });

  }
}
