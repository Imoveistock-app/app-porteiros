import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendTelService } from 'src/app/service/send-tel.service';

@Component({
  selector: 'app-send-code',
  templateUrl: './send-code.component.html',
  styleUrls: ['./send-code.component.scss'],
})
export class SendCodeComponent implements OnInit {

  form: FormGroup;
  numberTel: any;
  submitContinued = false;
  spinnload = false;
  continued = true;


  constructor(
    private formBuilder: FormBuilder,
    private sendTelService: SendTelService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      coden1: ['', [Validators.required]],
      coden2: ['', [Validators.required]],
      coden3: ['', [Validators.required]],
      coden4: ['', [Validators.required]],
    });
    this.numberTel = this.sendTelService.sendTel;
  }
  ngOnInit() { }


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
    setInterval(() => {
      this.router.navigate(['auth/splash']);
    }, 1000)
  }


}