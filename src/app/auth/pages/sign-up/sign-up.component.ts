import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  public maskTel: Array<any> = ['(',/\d/, /\d/, ')' ,/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCpf: Array<any> = [/\d/, /\d/ ,/\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-',/\d/,/\d/];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      terms: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      tel: ['', [Validators.required]],

    });
  }
  ngOnInit() {}

  goLogin(){
    this.router.navigate(['auth/login']);
  }
  goHome(){
    this.router.navigate(['logged/home']);
  }
}