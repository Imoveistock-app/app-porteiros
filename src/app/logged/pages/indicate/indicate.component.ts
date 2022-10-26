import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IndicateRequestDto } from 'src/app/dtos/indicate-request.dto';
import { PropertyIndicationOwnerDto } from 'src/app/dtos/property-indication-owner.dto';
import { Cep } from 'src/app/models/cep';
import { CepService } from 'src/app/service/cep.service';
import { ExtractService } from 'src/app/service/extract.service';
import { PropertyIndicationService } from 'src/app/service/property-indication.service';
import { UserGetResponseDto } from '../../../dtos/user-get-response.dto';

@Component({
  selector: 'app-indicate',
  templateUrl: './indicate.component.html',
  styleUrls: ['./indicate.component.scss'],
})
export class IndicateComponent implements OnInit {
  
  formIndicate: FormGroup;

  indicate = true;
  spinnload = false;
  isModalOpen = false;


  addContacts = 0;

  public maskCep: Array<any> = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,];
  public maskTel: Array<any> = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  modalIndicate: any;

  ownerRequest: PropertyIndicationOwnerDto;
  ownerGroup: any = [];

  request: IndicateRequestDto;

  user: UserGetResponseDto = {
    cpf: '',
    email: '',
    name: '',
    personalData: {
      birthDate: new Date,
      state: '',
      city: '',
    },
    phone: '',
    photo: {
      key: '',
      location: ''
    },
    profile: {
      name: '',
      description: '',
      apiFunctions: [
        {
          name: ''
        }
      ]
    },
    status: ''
  };


  constructor(
    private formBuilder: FormBuilder,
    private extractService: ExtractService,
    private router: Router,
    private cepService: CepService,
    private toastController: ToastController,
    private propertyIndicationService: PropertyIndicationService
  ) {
    this.formIndicate = this.formBuilder.group({
      cep: ['', [Validators.required]],
      road: ['', [Validators.required]],
      numberResidence: ['', [Validators.required]],
      complement: ['', [Validators.required]],
      ownername: [''],
      email: [''],
      ownerContact: [''],
      itsLeasing: [false],
      itsSale: [false],
    });
  }

  ngOnInit() {
    this.modalIndicate = this.extractService.indicate;

    this.user = JSON.parse(localStorage.getItem('userDto'));
  }

  buscarCep(event) {

    if (event.target.value.length === 9) {
      const cep = this.formIndicate.controls.cep.value;

      if (cep)
        this.cepService.buscarCep(cep).then((cep: Cep) => {
          this.formIndicate.patchValue({
            road: cep.logradouro,
          });
        });
    }

  }

  async addContent() {

    if (this.formIndicate.controls.ownerContact.value === '' || this.formIndicate.controls.email.value === '' || this.formIndicate.controls.ownername.value === '') {
      const toast = await this.toastController.create({
        message: `Preencha todos os campos para adicionar proprietário!`,
        duration: 1500,
        position: 'top',
        color: 'danger',
      });
      toast.present();
    } else {
      this.ownerRequest = {
        contact: this.formIndicate.controls.ownerContact.value,
        email: this.formIndicate.controls.email.value,
        name: this.formIndicate.controls.ownername.value,
      }

      this.ownerGroup.push(this.ownerRequest);

      this.formIndicate.patchValue({
        ownerContact: '',
        email: '',
        ownername: ''
      })
    }
  }

  removeOwner(item) {
    this.ownerGroup.splice(item, 1);
  }

  clearinput() {
    this.formIndicate.reset();
  }

  async confirmIndicate() {

    if (this.formIndicate.controls['itsLeasing'].value === '' && this.formIndicate.controls['itsSale'].value === '') {
      const toast = await this.toastController.create({
        message: `Escolha o tipo de indicação!`,
        duration: 1500,
        position: 'top',
        color: 'danger',
      });
      toast.present();
      return
    }

    if (this.ownerGroup.length === 0) {
      if (this.formIndicate.controls.ownerContact.value === '' || this.formIndicate.controls.email.value === '' || this.formIndicate.controls.ownername.value === '') {
        const toast = await this.toastController.create({
          message: `Adicione pelo menos um proprietário!`,
          duration: 1500,
          position: 'top',
          color: 'danger',
        });
        toast.present();
      } else {
        this.addContent();

        this.registerIndication();
      }
    } else {
      this.registerIndication();
    }
  }

  registerIndication() {

    this.request = {
      cep: this.formIndicate.controls['cep'].value,
      address: this.formIndicate.controls['road'].value,
      number: this.formIndicate.controls['numberResidence'].value,
      complement: this.formIndicate.controls['complement'].value,
      itsLeasing: this.formIndicate.controls['itsLeasing'].value,
      itsSale: this.formIndicate.controls['itsSale'].value,
      owners: this.ownerGroup
    }

    console.log(this.request)

    this.propertyIndicationService.register(this.request).subscribe(
      async success => {
        const toast = await this.toastController.create({
          message: `Propriedade indicada com sucesso!`,
          duration: 1500,
          position: 'top',
          color: 'success',
        });
        toast.present();

        this.isModalOpen = true;
        this.indicate = true;
        this.spinnload = false;

        this.ownerGroup = [];

        this.formIndicate.reset();
        this.router.navigate(['logged/property-list']);
      },
      async error => {
        const toast = await this.toastController.create({
          message: `Erro ao indicar propriedade!`,
          duration: 1500,
          position: 'top',
          color: 'danger',
        });
        toast.present();
      }
    )
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
