import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserRegisterRequestDto } from 'src/app/dtos/user-register-request.dto';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  public maskTel: Array<any> = ['(',/\d/, /\d/, ')' ,/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCpf: Array<any> = [/\d/, /\d/ ,/\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-',/\d/,/\d/];

  request: UserRegisterRequestDto;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    public toastController: ToastController
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      terms: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],

    });
  }
  ngOnInit() {}

  goLogin(){
    this.router.navigate(['auth/login']);
  }
  goHome(){
    this.router.navigate(['logged/home']);
  }

  confirm() {

    this.request = {
      cpf: this.form.controls.cpf.value,
      email: this.form.controls.email.value,
      name: this.form.controls.name.value,
      phone: `+55${this.form.controls.phone.value.replace(/\D/g, '')}`,
      profileId: 'fc68f468-9b93-4486-a92c-8d096f698987'
    };

    this.userService.register(this.request).subscribe(
      async success => {
        const toast = await this.toastController.create({
          message: `Usuario cadastrado com sucesso!`,
          duration: 1500,
          position: 'top',
          color: 'success',
        });
        toast.present();
        this.router.navigate(['auth/login'])
      },
      async error => {
        const toast = await this.toastController.create({
          message: `Não foi possível cadastrar usuário!`,
          duration: 1500,
          position: 'top',
          color: 'danger',
        });
        toast.present();
        console.error(error)
      }
    )
  }
}