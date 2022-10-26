import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.scss'],
})
export class WorkFormComponent implements OnInit {

  formperson: FormGroup;
  mokprofile: any;
  lessed = true;
  plused = false;
  lesscondominium = true;
  pluscondominium = false;
  lesswork = true;
  pluswork = false;
  datawork = true;
  dataed = true;
  datacondominium = true;

  public maskScale: Array<any> = [/\d/, /\d/, '/', /\d/, /\d/];
  public maskCep: Array<any> = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  continued = true;
  spinnload = false;

  isModalConfirm: boolean = false;
  isModalOk: boolean = false;


  constructor(
    private perfilService: PerfilService,
    private formBuilder: FormBuilder,
  ) {
    this.formperson = this.formBuilder.group({
      scale: ['', [Validators.required]],
      conciergeday1: ['', [Validators.required]],
      conciergeday2: ['', [Validators.required]],
      conciergenight1: ['', [Validators.required]],
      conciergenight2: ['', [Validators.required]],
      caretaker: ['', [Validators.required]],
      receptionist: ['', [Validators.required]],
      vigilant: ['', [Validators.required]],
      supervisor: ['', [Validators.required]],
      manager: ['', [Validators.required]],

      namecondominium: ['', [Validators.required]],
      edcondominium: ['', [Validators.required]],
      numbercondominium: ['', [Validators.required]],
      district: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      complement: ['', [Validators.required]],

      namesyndicate: ['', [Validators.required]],
      contactsyndicate: ['', [Validators.required]],
      category: ['', [Validators.required]],
      tower: ['', [Validators.required]],
      floors: ['', [Validators.required]],
      apartamentfloors: ['', [Validators.required]],
      propertieslocation: ['', [Validators.required]],
      propertiessold: ['', [Validators.required]],



    });

  }

  ngOnInit() {
    this.mokprofile = this.perfilService.personalData;
  }

  hideDataEd() {
    this.lessed = false;
    this.plused = true;
    this.dataed = false;
  }
  showDataEd() {
    this.lessed = true;
    this.plused = false;
    this.dataed = true;
  }
  hideDataWork() {
    this.lesswork = false;
    this.pluswork = true;
    this.datawork = false;
  }
  showDataWork() {
    this.lessed = true;
    this.plused = false;
    this.dataed = true;
  }

  hideDataCondominium() {
    this.lesscondominium = false;
    this.pluscondominium = true;
    this.datacondominium = false;
  }
  showDataCondominium() {
    this.lesscondominium = true;
    this.pluscondominium = false;
    this.datacondominium = true;
  }


  setOpen(isOpen: boolean) {
    this.isModalConfirm = isOpen;
  }

  setClose(isOpen: boolean) {
    this.isModalConfirm = isOpen;
    setTimeout(() =>{
      this.perfilService.getOutEditWork();
    }, 100) 
  }

  setOpenModalOk(isOpen: boolean) {
    this.isModalOk = isOpen;
  }

  setCloseModalOk(isOpen: boolean) {
    this.isModalOk = isOpen;
  }

  confirmCode(isOpen: boolean) {
    this.continued = false;
    this.spinnload = true;
    setTimeout(() => {
      this.isModalConfirm = isOpen;
      this.continued = true;
      this.spinnload = false;
    }, 700);

  }


  // SELECT CATEGORY
  selectCategory = [
    { category: 'Apartamentos' },
    { category: 'Casas' },
    { category: 'Mansões' },
    { category: 'Casarão' },
    { category: 'Palácio' },
    { category: 'Galpão' },
  ]


  // SELECT 
  selectScale = [
    { scale: '12/36' },
    { scale: '12/24' },
    { scale: '12/12' },
    { scale: '6/1' },


  ]
  // SELECT UNITY
  selectUnity = [
    { unity: '1' }, { unity: '2' }, { unity: '3' }, { unity: '4' }, { unity: '5' }, { unity: '6' }, { unity: '7' }, { unity: '8' }, { unity: '9' }, { unity: '10' }, { unity: '11' }, { unity: '12' }, { unity: '13' }, { unity: '14' }, { unity: '15' }, { unity: '16' }, { unity: '17' }, { unity: '18' }, { unity: '19' }, { unity: '20' }, { unity: '21' }, { unity: '22' }, { unity: '23' }, { unity: '24' }, { unity: '25' }, { unity: '26' }, { unity: '27' }, { unity: '28' }, { unity: '29' }, { unity: '30' }, { unity: '31' }, { unity: '32' }, { unity: '33' }, { unity: '34' }, { unity: '35' }, { unity: '36' }, { unity: '37' }, { unity: '38' }, { unity: '39' }, { unity: '40' }, { unity: '41' }, { unity: '42' }, { unity: '43' }, { unity: '44' }, { unity: '45' }, { unity: '46' }, { unity: '47' }, { unity: '48' }, { unity: '49' }, { unity: '50' },
  ]

}
