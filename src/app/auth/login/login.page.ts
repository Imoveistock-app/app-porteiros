import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  form: FormGroup;

  public maskTel: Array<any> = ['(',/\d/, /\d/, ')' ,/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      tel: ['', [Validators.required]]
    });
  }
  ngOnInit() {}
  sendSMS(){

  }

  insertTel(){

  }

  sendTel(){

  }

}
