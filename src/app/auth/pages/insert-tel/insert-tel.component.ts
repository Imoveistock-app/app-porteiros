import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticateRequestDto } from '../../../dtos/authenticate-request.dto';
import { AuthenticationService } from '../../../service/authentication.service';

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

  spinnload = false;
  continued = true;
  submitContinued = false;

  form: FormGroup;

  request: AuthenticateRequestDto;

  public maskTel: Array<any> = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    public toastController: ToastController
  ) {
    this.form = this.formBuilder.group({
      phone: ['', [Validators.required]]
    });
  }
  ngOnInit() { }

  insertTel(value) {

    let phone = value.replace(/\D/g, '')

    if (phone.length === 11) {
      this.componentPopup = true;
      this.componentTermsPrivacy = false;
      this.componentTxt = false;
      this.componentLogo = false;
      this.submitContinued = true;
    }

  }

  confirm() {

    this.request = {
      phone: `55${this.form.controls['phone'].value}`.replace(/\D/g, '')
    }

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
        this.router.navigate(['auth/send-code'])
      },
      async error => {
        const toast = await this.toastController.create({
          message: `Não foi possível enviar SMS!`,
          duration: 1500,
          position: 'top',
          color: 'danger',
        });
        toast.present();
        console.error(error)
      }
    )

  }

  goBack() {
    this.router.navigate(['auth/login']);
  }


}
