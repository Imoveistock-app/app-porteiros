/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserRegisterRequestDto } from 'src/app/dtos/user-register-request.dto';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from '../../../service/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  componentTxt = true;
  componentLogo = true;
  componentTermsPrivacy = true;
  componentPopup = false;
  submitContinued = false;

  public maskTel: Array<any> = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCpf: Array<any> = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  request: UserRegisterRequestDto;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    public toastController: ToastController,
    private authenticationService: AuthenticationService
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      terms: [false, Validators.requiredTrue],
      cpf: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],

    });
  }
  ngOnInit() { }

  goLogin() {
    this.router.navigate(['auth/login']);
  }
  goHome() {
    this.router.navigate(['logged/home']);
  }
  insertTel(value) {
    let phone = value.replace(/\D/g, '');

    if (phone.length === 11) {
      this.componentPopup = true;
      this.componentTermsPrivacy = false;
      this.componentTxt = false;
      this.componentLogo = false;
      this.submitContinued = true;
    }
  }

  async confirm() {
    this.request = {
      cpf: this.form.controls.cpf.value,
      email: this.form.controls.email.value,
      name: this.form.controls.name.value,
      phone: `+55${this.form.controls.phone.value.replace(/\D/g, '')}`,
      profileId: 'fc68f468-9b93-4486-a92c-8d096f698987'
    };


    if (this.form.controls.terms.value === true) {
      // validação usuário cadastrado
      this.userService.register(this.request).subscribe(
        async success => {
          const toast = await this.toastController.create({
            message: `Usuario cadastrado com sucesso!`,
            duration: 1500,
            position: 'top',
            color: 'success',
          });
          toast.present();
          // this.router.navigate(['auth/send-code'])
          this.nextFunction();
        },
        async error => {
          if (error.error.errors[0].includes('Duplicate')) {
            const toast = await this.toastController.create({
              message: `Usuário já cadastrado!`,
              duration: 1500,
              position: 'top',
              color: 'warning',
            });
            toast.present();
            return;
          }
          const toast = await this.toastController.create({
            message: `Não foi possível cadastrar usuário!`,
            duration: 1500,
            position: 'top',
            color: 'danger',
          });
          toast.present();
        }
      );
    }
    else if (this.form.controls.terms.value === false) {
      const toast = await this.toastController.create({
        message: 'Necessario estar de acordo com os termos e condições de uso!',
        duration: 1500,
        position: 'top',
        color: 'danger',
      });
      toast.present();
    }
  }


  nextFunction() {
    if (this.form.controls.terms.value === true) {
      this.authenticationService.authenticate(this.request).subscribe(
        async success => {
          const toast = await this.toastController.create({
            message: `Sms enviado com sucesso!`,
            duration: 1500,
            position: 'top',
            color: 'success',
          });
          toast.present();
          localStorage.setItem('phone', this.request.phone);
          this.router.navigate(['auth/send-code']);
        },
        async error => {
          const toast = await this.toastController.create({
            message: `Não foi possível enviar SMS!`,
            duration: 1500,
            position: 'top',
            color: 'danger',
          });
          toast.present();
          console.error(error);
        }
      );
      // console.log(this.request)
    }
  }
}
