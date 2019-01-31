import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private dataHttp: HttpClient) { }

  loginServive() {
    console.log('In service');
  }
  httpService() {
    console.log('In Http service');
    return this.dataHttp.get('https://reqres.in/api/users?page=2');
  }
  httpPostService() {
    console.log('In http post service');
    return this.dataHttp.post('https:/reqres.in/api/login', { 'email': 'peter@klaven',
      'password': 'cityslicka'});
  }
  httpPostServiceParam(emailId, password) {
    console.log('In http post service with parameter');
    return this.dataHttp.post('https:/reqres.in/api/login', { 'email': emailId,
      'password': password});
  }
}
