import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService} from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  dataResponse: object;

  constructor(private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      this.submitted = false;
      return;
    }
console.log('this.messageForm.controls.name : ', this.messageForm.controls.name);
    this.data.httpPostServiceParam(this.messageForm.controls.name, this.messageForm.controls.message).subscribe(dataresponse => {
      this.dataResponse = dataresponse;
    });

    this.success = true;
  }

}
