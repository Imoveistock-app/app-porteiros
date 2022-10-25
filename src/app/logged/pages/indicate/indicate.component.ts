import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExtractService } from 'src/app/service/extract.service';

@Component({
  selector: 'app-indicate',
  templateUrl: './indicate.component.html',
  styleUrls: ['./indicate.component.scss'],
})
export class IndicateComponent implements OnInit {
  formIndicate: FormGroup;

  cep: number;
  road: string = "";
  numberResidence: number;
  complement: string = "";
  ownername: string = "";
  email: string = "";
  ownerContact: number;

  indicate = true;
  spinnload = false;
  isModalOpen = false;


  addContacts = 0;

  public maskCep: Array<any> = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,];
  public maskTel: Array<any> = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  modalIndicate: any;


  constructor(
    private formBuilder: FormBuilder,
    private extractService : ExtractService,
    private router: Router,
  ) {
    this.formIndicate = this.formBuilder.group({
      cep: ['', [Validators.required]],
      road: ['', [Validators.required]],
      numberResidence: ['', [Validators.required]],
      complement: ['', [Validators.required]],
      ownername: ['', [Validators.required]],
      email: ['', [Validators.required]],
      ownerContact: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.modalIndicate = this.extractService.indicate;
   }

  addContent() {
    this.addContacts = this.addContacts++;
  }

  clearinput() {
    this.cep = null;
    this.road = "";
    this.numberResidence = null;
    this.complement = "";
    this.email = "";
    this.ownerContact = null;
  }

  confirmIndicate(isOpen: boolean) {
    console.log(isOpen);
      this.indicate = false;
      this.spinnload = true;
      setTimeout(() => {
        this.isModalOpen = isOpen;
        this.indicate = true;
        this.spinnload = false;
      }, 1000);
  }
}
