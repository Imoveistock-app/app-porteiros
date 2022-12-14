import { Component, OnInit } from '@angular/core';
import { UserGetResponseDto } from 'src/app/dtos/user-get-response.dto';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent implements OnInit {


  mokprofile: any;

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


  constructor(
    private perfilService: PerfilService,
  ) {
  }

  ngOnInit() {
    this.mokprofile = this.perfilService.personalData;

    this.user = JSON.parse(localStorage.getItem('userDto'));

  }





}
