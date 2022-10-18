import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

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
  constructor(
    private homeService: HomeService,
    private router: Router
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

  // Propenso à alterações
  goIndicateProperty(){
    this.router.navigate(['/Indicate-Property']);
  }


  // Propenso à alterações
  goExtract(){
    this.router.navigate(['/Extract']);
  }
  
  // Propenso à alterações
  goIndicatedProperties(){
    this.router.navigate(['logged/property-list']);
  }

}
