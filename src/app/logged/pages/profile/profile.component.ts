import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/service/perfil.service';
import { UserGetResponseDto } from '../../../dtos/user-get-response.dto';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  mokprofile: any;
  personaldata = true;
  workdata = false;

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
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.mokprofile = this.perfilService.card;

    this.userService.getUser().subscribe(
      success => {
        this.user = success;
      },
      error => {
        console.error(error)
      }
    )
  }


  goAbout(){
    this.router.navigate(['logged/about']);
  }
  goPrivacyPolicy(){
    this.router.navigate(['logged/privacy-policy']);

  }
  goTermsConditions(){
    this.router.navigate(['logged/terms-conditions']);

  }
  workPage(){
    this.personaldata = false;
    this.workdata = true;
  }
  personalPage(){
    this.personaldata = true;
    this.workdata = false;
  }

}
