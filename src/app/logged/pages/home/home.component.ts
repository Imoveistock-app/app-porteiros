import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { PersonalData, UserGetResponseDto } from '../../../dtos/user-get-response.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  infoHome: any[];
  infoBalance: any[];
  infoCards: any[];
  balance = true;
  hideeye = false;

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
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.infoHome = this.homeService.home;
    this.infoBalance = this.homeService.balance;
    this.infoCards = this.homeService.cards;
    
    if(localStorage.getItem('userDto') === null) {
      this.router.navigate(['/'])
    }
    this.user = JSON.parse(localStorage.getItem('userDto'));


  }

  changeEye() {
    this.hideeye = !this.hideeye;
    this.balance = !this.balance;
  }

  // Propenso à alterações
  goIndicateProperty() {
    this.router.navigate(['logged/indicate']);
  }


  // Propenso à alterações
  goExtract() {
    this.router.navigate(['logged/extract']);
  }

  // Propenso à alterações
  goIndicatedProperties() {
    this.router.navigate(['logged/property-list']);
  }

  // Rota ainda não definida
  goMoreSold() {
    this.router.navigate(['#']);
  }

}
