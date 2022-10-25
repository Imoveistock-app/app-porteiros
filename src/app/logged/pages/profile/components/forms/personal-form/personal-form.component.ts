import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserGetResponseDto } from 'src/app/dtos/user-get-response.dto';
import { PerfilService } from 'src/app/service/perfil.service';
import { states, cities } from "estados-cidades";
import { UserService } from 'src/app/service/user.service';
import { UserEditRequestDto } from 'src/app/dtos/user-edit-request.dto';
import { ToastController } from '@ionic/angular';
import { UserEditPersonalDataRequestDto } from 'src/app/dtos/user-edit-personal-data-request.dto';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss'],
})
export class PersonalFormComponent implements OnInit {

  formperson: FormGroup;


  mokprofile: any;
  lessbank = true;
  plusbank = false;
  databank = true;

  stateSelected: string;
  cities: any[];
  states: any[];


  public maskCep: Array<any> = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  public maskCpf: Array<any> = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public maskTel: Array<any> = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCurrent: Array<any> = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
  continued = true;
  spinnload = false;

  isModalConfirm: boolean = false;
  isModalOk: boolean = false;

  user: UserGetResponseDto = {
    cpf: '',
    email: '',
    name: '',
    personalData: {
      birthDate: new Date,
      state: '',
      city: '',
      bankInfo: {
        name: '',
        agencyNumber: '',
        accountNumber: ''
      }
    },
    phone: '',
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

  userRequestEdit: UserEditRequestDto;

  userPersonalDataRequest: UserEditPersonalDataRequestDto;


  constructor(
    private perfilService: PerfilService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastController: ToastController
  ) {
    this.formperson = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      nameBank: ['', [Validators.required]],
      agency: ['', [Validators.required]],
      current: ['', [Validators.required]],
    });

  }

  ngOnInit() {
    this.mokprofile = this.perfilService.personalData;

    this.user = JSON.parse(localStorage.getItem('userDto'));

    
    let dateTotal = new Date(this.user.personalData?.birthDate);
    let dayBirthDate = dateTotal.getDate();
    let monthBirthDate: any = dateTotal.getMonth() + 1;
    if(monthBirthDate < 10) {
      monthBirthDate = `0${monthBirthDate}`
    }
    let yearBirthDate = dateTotal.getFullYear();
    
    let dateFormated = `${dayBirthDate}/${monthBirthDate}/${yearBirthDate}`
    
    console.log(dateFormated)
    
    this.formperson.patchValue({
      name: this.user.name,
      email: this.user.email,
      cpf: this.user.cpf,
      phone: this.user.phone.slice(2, 13),
      birthdate: dateFormated,
      state: this.user.personalData?.state,
      city: this.user.personalData?.city,
      nameBank: this.user.personalData?.bankInfo?.name,
      agency: this.user.personalData?.bankInfo?.agencyNumber,
      current: this.user.personalData?.bankInfo?.accountNumber
    })

    console.log(this.formperson.controls.state.value)

    this.states = states();
  }

  getCities() {
    this.cities = cities(this.stateSelected);
  }

  confirm() {


    console.log(this.formperson.controls.nameBank.value)

    if (this.formperson.controls.name.value !== this.user.name || this.formperson.controls.phone.value.replace(/\D/g, '') !== this.user.phone.slice(2, 13) || this.formperson.controls.cpf.value.replace(/\D/g, '') !== this.user.cpf) {

      if (this.formperson.controls.cpf.value.length < 14) {
        let cpfMask = `${this.formperson.controls.cpf.value[0]}${this.formperson.controls.cpf.value[1]}${this.formperson.controls.cpf.value[2]}.${this.formperson.controls.cpf.value[3]}${this.formperson.controls.cpf.value[4]}${this.formperson.controls.cpf.value[5]}.${this.formperson.controls.cpf.value[6]}${this.formperson.controls.cpf.value[7]}${this.formperson.controls.cpf.value[8]}-${this.formperson.controls.cpf.value[9]}${this.formperson.controls.cpf.value[10]}`
        this.userRequestEdit = {
          cpf: cpfMask,
          name: this.formperson.controls.name.value,
          phone: `55${this.formperson.controls.phone.value}`,
        }
      } else {
        this.userRequestEdit = {
          cpf: this.formperson.controls.cpf.value,
          name: this.formperson.controls.name.value,
          phone: `55${this.formperson.controls.phone.value}`,
        }
      }

      this.userService.edit(this.userRequestEdit).subscribe(
        async success => {
          this.editSuccess('user')
        },
        async error => {
          const toast = await this.toastController.create({
            message: `Erro ao alterar perfil!`,
            duration: 1500,
            position: 'top',
            color: 'danger',
          });
          toast.present();
        }
      )
    } else if (this.formperson.controls.birthdate.value !== this.user.personalData?.birthDate || this.formperson.controls.state.value !== this.user.personalData?.state || this.formperson.controls.city.value !== this.user.personalData?.city || this.formperson.controls.city.value !== this.user.personalData?.city || this.formperson.controls.nameBank.value !== this.user.personalData?.bankInfo?.name || this.formperson.controls.agency.value !== this.user.personalData?.bankInfo?.agencyNumber || this.formperson.controls.current.value !== this.user.personalData?.bankInfo?.accountNumber) {
      this.userPersonalDataRequest = {
        birthDate: this.formperson.controls.birthdate.value,
        city: this.formperson.controls.city.value,
        state: this.formperson.controls.state.value,
        bankInfo: {
          name: this.formperson.controls.nameBank.value,
          accountNumber: this.formperson.controls.current.value,
          agencyNumber: this.formperson.controls.agency.value,
        },
      }

      console.log(this.userPersonalDataRequest)
      this.userService.editPersonalData(this.userPersonalDataRequest).subscribe(
        success => {
          this.editSuccess('personalData')
        },
        async error => {
          const toast = await this.toastController.create({
            message: `Erro ao alterar perfil!`,
            duration: 1500,
            position: 'top',
            color: 'danger',
          });
          toast.present();
        }
      )
    }
  }

  async editSuccess(value) {
    if (value === 'user') {
      this.userService.getUser().subscribe(
        success => {
          let user = JSON.stringify(success);
          localStorage.setItem('userDto', user)
          window.location.reload();
        },
        error => {
          console.error(error)
        }
      )
      const toast = await this.toastController.create({
        message: `Perfil alterado com sucesso!`,
        duration: 1500,
        position: 'top',
        color: 'success',
      });
      toast.present();
    }

    if (value === 'personalData') {
      this.userService.getUser().subscribe(
        success => {
          let user = JSON.stringify(success);
          localStorage.setItem('userDto', user)
          window.location.reload();
        },
        error => {
          console.error(error)
        }
      )
      const toast = await this.toastController.create({
        message: `Perfil alterado com sucesso!`,
        duration: 1500,
        position: 'top',
        color: 'success',
      });
      toast.present();
    }
  }

  hideDataBank() {
    this.lessbank = false;
    this.plusbank = true;
    this.databank = false;
  }
  showDataBank() {
    this.lessbank = true;
    this.plusbank = false;
    this.databank = true;
  }


  setOpen(isOpen: boolean) {
    this.isModalConfirm = isOpen;
  }

  setClose(isOpen: boolean) {
    this.isModalConfirm = isOpen;
    setTimeout(() => {
      this.perfilService.getOutEditPerson();
    }, 100)
  }

  setOpenModalOk(isOpen: boolean) {
    this.isModalOk = isOpen;
  }

  setCloseModalOk(isOpen: boolean) {
    this.isModalOk = isOpen;
    setTimeout(() => {
      this.perfilService.getOutEditPerson();
    }, 100)

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


  // SELECT STATE
  selectStates = [
    { states: 'DF' },
  ]

  // SELECT CITY
  selectCity = [
    { cities: 'Brasília' },
  ]

  // SELECT BANK
  selectBank = [
    { bank: 'Nubank S.A' },
    { bank: 'Santander' },
    { bank: 'Bradesco' },
    { bank: 'Caixa' },
    { bank: 'Itaú' },
    { bank: 'C6 bank' },
    { bank: 'PagBank' },
  ]

}
