import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  infoHome: any[];
  infoBalance: any[];
  infoCards: any[];
  balance = true;
  hideeye = false;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.infoHome = this.homeService.home;
    this.infoBalance = this.homeService.balance;
    this.infoCards = this.homeService.cards;
  }

  changeEye() {
    this.hideeye =!this.hideeye;
    this.balance = !this.balance;
  }

}
