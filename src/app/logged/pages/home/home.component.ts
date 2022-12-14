import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { BalanceResponseDto } from '../../../dtos/balance-response.dto';
import { ListPropertyIndicationResponseDto } from '../../../dtos/list-property-indication-response.dto';
import { PaginateQuerryRequestDto } from '../../../dtos/paginate-querry-request.dto';
import { PersonalData, UserGetResponseDto } from '../../../dtos/user-get-response.dto';
import { PropertyIndicationService } from '../../../service/property-indication.service';
import {SocialSharing} from "@awesome-cordova-plugins/social-sharing/ngx";

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

  propertyListAll: ListPropertyIndicationResponseDto[];

  paginateQuerryRequest: PaginateQuerryRequestDto;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private propertyIndicationService: PropertyIndicationService,
    private socialSharing: SocialSharing
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
        console.error(error)
      }
    );

    this.paginateQuerryRequest = {
      skip: 0,
      take: 0
    }

    this.propertyIndicationService.list(this.paginateQuerryRequest).subscribe(
      success => {
        this.propertyListAll = success
      },
      error => {
        console.error(error)
      }
    )

  }

  changeEye() {
    this.hideeye = !this.hideeye;
    this.balance = !this.balance;
  }

  // Propenso ?? altera????es
  goIndicateProperty() {
    this.router.navigate(['logged/indicate']);
  }


  // Propenso ?? altera????es
  goExtract() {
    this.router.navigate(['logged/extract']);
  }

  // Propenso ?? altera????es
  goIndicatedProperties() {
    this.router.navigate(['logged/property-list']);
  }

  goMoreSold() {
    // Rota ainda n??o definida
  }

  compartilhar() {
    this.socialSharing.share('https://www.imoveistock.com.br/')
    console.log('https://www.imoveistock.com.br/')
  }

}
