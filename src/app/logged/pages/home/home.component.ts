import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtractService } from 'src/app/service/extract.service';
import { HomeService } from 'src/app/service/home.service';
import { BalanceResponseDto } from '../../../dtos/balance-response.dto';
import { ListPropertyIndicationResponseDto } from '../../../dtos/list-property-indication-response.dto';
import { PaginateQuerryRequestDto } from '../../../dtos/paginate-querry-request.dto';
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
  closemodalwelcome = true;
  modalWellcome: any;
  // ?
  cardindicate = true;


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
    private extractService: ExtractService,
    private router: Router,
    private propertyIndicationService: PropertyIndicationService
  ) { }

  ngOnInit() {
    this.infoHome = this.homeService.home;
    this.infoBalance = this.homeService.balance;
    this.modalWellcome = this.extractService.indicate;
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

  goIndicateProperty() {
    this.router.navigate(['logged/indicate']);
  }
  closeModal(){
    this.closemodalwelcome = false;
    
  }


  goExtract() {
    this.router.navigate(['logged/extract']);
  }

  goProfile(){
    this.router.navigate(['logged/profile']);

  }

  goIndicatedProperties() {
    this.router.navigate(['logged/property-list']);
  }

  goMoreSold() {
    // Rota ainda não definida
  }

}
