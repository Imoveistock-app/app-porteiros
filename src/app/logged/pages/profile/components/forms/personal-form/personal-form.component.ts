import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from 'src/app/service/perfil.service';

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
  
 
   public maskCep: Array<any> = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
   public maskCpf: Array<any> = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
   public maskTel: Array<any> = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
   public maskCurrent: Array<any> = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,'-' ,/\d/];
   continued = true;
   spinnload = false;
 
   isModalConfirm: boolean = false;
   isModalOk: boolean = false;
 
 
   constructor(
     private perfilService: PerfilService,
     private formBuilder: FormBuilder,
   ) {
     this.formperson = this.formBuilder.group({
       name: ['', [Validators.required]],
       email: ['', [Validators.required]],
       cpf: ['', [Validators.required]],
       phone: ['', [Validators.required]],
       birthdate: ['', [Validators.required]],
       state: ['', [Validators.required]],
       city: ['', [Validators.required]],
       bank: ['', [Validators.required]],
       agency: ['', [Validators.required]],
       current: ['', [Validators.required]],
     });
 
   }
 
   ngOnInit() {
     this.mokprofile = this.perfilService.personalData;
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
   }
 
   setOpenModalOk(isOpen: boolean) {
     this.isModalOk = isOpen;
   }
 
   setCloseModalOk(isOpen: boolean) {
     this.isModalOk = isOpen;
   }
 
   confirmCode(isOpen: boolean){
     this.continued = false;
     this.spinnload = true;
     setTimeout(() =>{
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
 