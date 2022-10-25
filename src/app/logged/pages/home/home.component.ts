import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { BalanceResponseDto } from '../../../dtos/balance-response.dto';
import { PersonalData, UserGetResponseDto } from '../../../dtos/user-get-response.dto';
import { PropertyIndicationService } from '../../../service/property-indication.service';

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

  myBalance: BalanceResponseDto = {
    balance: 0
  };

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

  requestDate: Date = new Date;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private propertyIndicationService: PropertyIndicationService
  ) { }

  ngOnInit() {
    this.infoHome = this.homeService.home;
    this.infoBalance = this.homeService.balance;
    this.infoCards = this.homeService.cards;

    this.user = JSON.parse(localStorage.getItem('userDto'));

    this.propertyIndicationService.getBalance().subscribe(
      success => {
        this.myBalance = success;
      },
      error => {
        console.log(error)
      }
    )

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
