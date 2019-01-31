import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  appTitle = 'Login App';
  home = 'Home';
  login = 'Login';
  register = 'Register';
  constructor() { }

  ngOnInit() {
  }

}
