import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-tel',
  templateUrl: './insert-tel.component.html',
  styleUrls: ['./insert-tel.component.scss'],
})
export class InsertTelComponent implements OnInit {

  componentTxt = true;
  componentLogo = true;
  componentTermsPrivacy = true;
  componentPopup = false;

  form: FormGroup;

  public maskTel: Array<any> = ['(',/\d/, /\d/, ')' ,/\d/,/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

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
    this.router.navigate(['auth/send-code']);

  }

  insertTel(){
    this.componentPopup = true;
    this.componentTermsPrivacy = false;
    this.componentTxt = false;
    this.componentLogo = false;
  }

  goBack(){
    this.router.navigate(['auth/login']);
  }


}
