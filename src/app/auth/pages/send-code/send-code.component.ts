import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SendTelService } from 'src/app/service/send-tel.service';
import { AuthetincatedUserDto } from '../../../dtos/authenticated-user.dto';
import { AuthenticateCodeConfirmationRequestDto } from '../../../dtos/authentication-code-confirmation-request.dto';
import { AuthenticationService } from '../../../service/authentication.service';

@Component({
  selector: 'app-send-code',
  templateUrl: './send-code.component.html',
  styleUrls: ['./send-code.component.scss'],
})
export class SendCodeComponent implements OnInit {

  form: FormGroup;
  numberTel: string;
  submitContinued = false;
  spinnload = false;
  continued = true;

  codeComplete: number;

  request: AuthenticateCodeConfirmationRequestDto;

  constructor(
    private formBuilder: FormBuilder,
    private sendTelService: SendTelService,
    private router: Router,
    private authenticationService: AuthenticationService,
    public toastController: ToastController
  ) {
    this.form = this.formBuilder.group({
      coden1: ['', [Validators.required]],
      coden2: ['', [Validators.required]],
      coden3: ['', [Validators.required]],
      coden4: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    let phone = localStorage.getItem('phone');
    this.numberTel = phone;

    if(this.numberTel === null) {
      this.router.navigate(['auth/insert-tel'])
    }
  }


  sendSMS() {
    this.router.navigate(['/insert-tel']);
  }

  sendTel() {
    this.router.navigate(['/send-code']);
  }
  goBack() {
    this.router.navigate(['/login']);
  }
  gotoNextField(nextInput) {
    nextInput.setFocus();
  }
  finishFunction() {
    this.submitContinued = true;
  }
  confirmCode() {
    this.continued = false;
    this.spinnload = true;

    let code1 = this.form.controls.coden1.value;
    let code2 = this.form.controls.coden2.value;
    let code3 = this.form.controls.coden3.value;
    let code4 = this.form.controls.coden4.value;

    this.request = {
      code: parseInt(`${code1}${code2}${code3}${code4}`),
      phone: localStorage.getItem('phone')
    }

    this.authenticationService.authenticateCodeConfirmation(this.request).subscribe(
      success => {
        this.router.navigate(['auth/splash']);
        localStorage.removeItem('phone');
        this.authenticationService.setAuthenticatedUser(
          new AuthetincatedUserDto(success.userId, success.phone, success.token, success.profileId, success.apiFunctionsId),
        );
      },
      async error => {
        const toast = await this.toastController.create({
          message: `Não foi possível realizar login!`,
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