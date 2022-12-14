import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { PerfilService } from 'src/app/service/perfil.service';
import { UserUpdateWorkDataRequestDto } from '../../../../../../dtos/user-update-work-data-request.dto';
import { Cep } from '../../../../../../models/cep';
import { CepService } from '../../../../../../service/cep.service';
import { UserService } from '../../../../../../service/user.service';

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
  dataed = true;
  datacondominium = true;
  public maskScale: Array<any> = [/\d/, /\d/, '/', /\d/, /\d/];
  public maskCep: Array<any> = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  continued = true;
  spinnload = false;

  isModalConfirm: boolean = false;
  isModalOk: boolean = false;


  request: UserUpdateWorkDataRequestDto;

  constructor(
    private perfilService: PerfilService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cepService: CepService,
    private toastController: ToastController
  ) {
    this.formperson = this.formBuilder.group({
      workSchedule: ['', [Validators.required]],
      morningPorter1: ['', [Validators.required]],
      morningPorter2: [''],
      afternoonPorter1: [''],
      nigthPorter1: ['', [Validators.required]],
      nigthPorter2: [''],
      janitor: ['', [Validators.required]],
      extraPorter: [''],
      vigilant: [''],
      supervisor: [''],
      manager: [''],
      name: ['', [Validators.required]],
      addressStreet: ['', [Validators.required]],
      addressNumber: ['', [Validators.required]],
      addressDistrict: ['', [Validators.required]],
      addressCep: ['', [Validators.required]],
      addressComplement: ['', [Validators.required]],
      syndic: ['', [Validators.required]],
      syndicContact: ['', [Validators.required]],
      category: ['', [Validators.required]],
      numberOfTowers: ['', [Validators.required]],
      howManyFloors: ['', [Validators.required]],
      complement: ['', [Validators.required]],
      apartmentsPerrFloor: ['', [Validators.required]],
      howManyApartmentsForLease: ['', [Validators.required]],
      howManyApartmentsForSale: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.mokprofile = this.perfilService.personalData;

    let user: any = localStorage.getItem('userDto');
    user = JSON.parse(user);

    if (user.workData !== null) {
      if (user.workData.workSchedule === '12x36') {
        this.formperson.patchValue({
          workSchedule: user.workData.workSchedule,

          morningPorter1: user.workData.morningPorter1,

          morningPorter2: user.workData.morningPorter2,

          nigthPorter1: user.workData.nigthPorter1,

          nigthPorter2: user.workData.nigthPorter2,

          janitor: user.workData.janitor,
        })
      } else if (user.workData.workSchedule === '5x1') {
        this.formperson.patchValue({
          workSchedule: user.workData.workSchedule,

          morningPorter1: user.workData.morningPorter1,

          afternoonPorter1: user.workData.morningPorter1,

          nigthPorter1: user.workData.nigthPorter1,

          janitor: user.workData.janitor,

          extraPorter: user.workData.extraPorter,
        })
      }
      this.formperson.patchValue({
        name: user.workData.condominium.name,

        addressStreet: user.workData.condominium.addressStreet,

        addressNumber: user.workData.condominium.addressNumber,

        addressDistrict: user.workData.condominium.addressDistrict,

        addressCep: user.workData.condominium.addressCep,

        addressComplement: user.workData.condominium.addressComplement,

        syndic: user.workData.condominium.syndic,

        syndicContact: user.workData.condominium.syndicContact,

        category: user.workData.condominium.category,

        numberOfTowers: user.workData.condominium.numberOfTowers,

        howManyFloors: user.workData.condominium.howManyFloors,

        complement: user.workData.condominium.complement,

        apartmentsPerrFloor: user.workData.condominium.apartmentsPerrFloor,

        howManyApartmentsForLease: user.workData.condominium.howManyApartmentsForLease,

        howManyApartmentsForSale: user.workData.condominium.howManyApartmentsForSale,
      })
    }
  }

  hideDataEd() {
    this.lessed = false;
    this.plused = true;
    this.dataed = false;
  }


  compareWith(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  async confirm() {

    let condominioDto = {
      name: this.formperson.controls.name.value,

      addressStreet: this.formperson.controls.addressStreet.value,

      addressNumber: this.formperson.controls.addressNumber.value,

      addressDistrict: this.formperson.controls.addressDistrict.value,

      addressCep: this.formperson.controls.addressCep.value,

      addressComplement: this.formperson.controls.addressComplement.value,

      syndic: this.formperson.controls.syndic.value,

      syndicContact: this.formperson.controls.syndicContact.value,

      category: this.formperson.controls.category.value,

      numberOfTowers: parseInt(this.formperson.controls.numberOfTowers.value.replace(/\D/g, '')),

      howManyFloors: parseInt(this.formperson.controls.howManyFloors.value.replace(/\D/g, '')),

      complement: this.formperson.controls.complement.value,

      apartmentsPerrFloor: parseInt(this.formperson.controls.apartmentsPerrFloor.value.replace(/\D/g, '')),

      howManyApartmentsForLease: parseInt(this.formperson.controls.howManyApartmentsForLease.value.replace(/\D/g, '')),

      howManyApartmentsForSale: parseInt(this.formperson.controls.howManyApartmentsForSale.value.replace(/\D/g, '')),
    }

    if (this.formperson.controls.workSchedule.value === '12x36') {

      this.request = {
        workSchedule: this.formperson.controls.workSchedule.value,

        morningPorter1: this.formperson.controls.morningPorter1.value,

        morningPorter2: this.formperson.controls.morningPorter2.value,

        nigthPorter1: this.formperson.controls.nigthPorter1.value,

        nigthPorter2: this.formperson.controls.nigthPorter2.value,

        janitor: this.formperson.controls.janitor.value,

        condominium: condominioDto
      }
      this.registerUpdate();
    } else if (this.formperson.controls.workSchedule.value === '5x1') {
      this.request = {
        workSchedule: this.formperson.controls.workSchedule.value,

        morningPorter1: this.formperson.controls.morningPorter1.value,

        afternoonPorter1: this.formperson.controls.afternoonPorter1.value,

        nigthPorter1: this.formperson.controls.nigthPorter1.value,

        janitor: this.formperson.controls.janitor.value,

        extraPorter: this.formperson.controls.extraPorter.value,

        condominium: condominioDto
      }
      this.registerUpdate();
    } else {
      const toast = await this.toastController.create({
        message: `Escolha o tipo de escala!`,
        duration: 1500,
        position: 'top',
        color: 'danger',
      });
      toast.present();
    }

  }

  registerUpdate() {

    console.log(this.request)

    this.userService.editWorkData(this.request).subscribe(
      async success => {
        const toast = await this.toastController.create({
          message: `Dados alterados com sucesso!`,
          duration: 1500,
          position: 'top',
          color: 'success',
        });
        toast.present();
        this.getUser();
      }, async error => {
        const toast = await this.toastController.create({
          message: `Erro ao alterar dados!`,
          duration: 1500,
          position: 'top',
          color: 'danger',
        });
        toast.present();
        console.error(error)
      }
    )
  }

  getUser() {
    this.userService.getUser().subscribe(
      success => {
        let user: any = JSON.stringify(success);
        localStorage.setItem('userDto', user)
        window.location.reload();
      },
      error => {
        console.error(error)
      }
    )
  }

  buscarCep(event) {

    if (event.target.value.length === 9) {
      const cep = this.formperson.controls.addressCep.value;

      if (cep)
        this.cepService.buscarCep(cep).then((cep: Cep) => {
          this.formperson.patchValue({
            addressStreet: cep.logradouro,
            addressDistrict: cep.bairro,
          });
        });
    }

  }


  showDataEd() {
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
    setTimeout(() => {
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
    { category: 'Mans??es' },
    { category: 'Casar??o' },
    { category: 'Pal??cio' },
    { category: 'Galp??o' },

  ]

  // SELECT UNITY
  selectUnity = [
    { unity: '1' }, { unity: '2' }, { unity: '3' }, { unity: '4' }, { unity: '5' }, { unity: '6' }, { unity: '7' }, { unity: '8' }, { unity: '9' }, { unity: '10' }, { unity: '11' }, { unity: '12' }, { unity: '13' }, { unity: '14' }, { unity: '15' }, { unity: '16' }, { unity: '17' }, { unity: '18' }, { unity: '19' }, { unity: '20' }, { unity: '21' }, { unity: '22' }, { unity: '23' }, { unity: '24' }, { unity: '25' }, { unity: '26' }, { unity: '27' }, { unity: '28' }, { unity: '29' }, { unity: '30' }, { unity: '31' }, { unity: '32' }, { unity: '33' }, { unity: '34' }, { unity: '35' }, { unity: '36' }, { unity: '37' }, { unity: '38' }, { unity: '39' }, { unity: '40' }, { unity: '41' }, { unity: '42' }, { unity: '43' }, { unity: '44' }, { unity: '45' }, { unity: '46' }, { unity: '47' }, { unity: '48' }, { unity: '49' }, { unity: '50' },
  ]

}
