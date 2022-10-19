import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  homeicon = true;
  homeicongreen = false;

  handicon = true;
  handicongreen = false;

  staricon = true;
  staricongreen = false;

  tiketicon = true;
  tiketicongreen = false;

  usericon = true;
  usericongreen = false;
  

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  home() {
    this.router.navigate(['logged/home']);
    this.homeicon = false;
    this.homeicongreen = true;
  
    this.handicon = true;
    this.handicongreen = false;
  
    this.staricon = true;
    this.staricongreen = false;
  
    this.tiketicon = true;
    this.tiketicongreen = false;
  
    this.usericon = true;
    this.usericongreen = false;

    const home = document.querySelector(
      '.home'
    ) as HTMLElement;
    home.style.color = '#68F4A0';
    const hand = document.querySelector(
      '.hand'
    ) as HTMLElement;
    hand.style.color = 'white';
    const star = document.querySelector(
      '.star'
    ) as HTMLElement;
    star.style.color = 'white';
    const tiket = document.querySelector(
      '.tiket'
    ) as HTMLElement;
    tiket.style.color = 'white';
    const user = document.querySelector(
      '.user'
    ) as HTMLElement;
    user.style.color = 'white';

  }
  hand() {
    this.router.navigate(['logged/indicate']);

    this.homeicon = true;
    this.homeicongreen = false;
  
    this.handicon = false;
    this.handicongreen = true;
  
    this.staricon = true;
    this.staricongreen = false;
  
    this.tiketicon = true;
    this.tiketicongreen = false;
  
    this.usericon = true;
    this.usericongreen = false;
    const home = document.querySelector(
      '.home'
    ) as HTMLElement;
    home.style.color = 'white';
    const hand = document.querySelector(
      '.hand'
    ) as HTMLElement;
    hand.style.color = '#68F4A0';
    const star = document.querySelector(
      '.star'
    ) as HTMLElement;
    star.style.color = 'white';
    const tiket = document.querySelector(
      '.tiket'
    ) as HTMLElement;
    tiket.style.color = 'white';
    const user = document.querySelector(
      '.user'
    ) as HTMLElement;
    user.style.color = 'white';

  }
  star() {
    this.router.navigate(['logged/property-list']);
  

    this.homeicon = true;
    this.homeicongreen = false;
  
    this.handicon = true;
    this.handicongreen = false;
  
    this.staricon = false;
    this.staricongreen = true;
  
    this.tiketicon = true;
    this.tiketicongreen = false;
  
    this.usericon = true;
    this.usericongreen = false;
    const home = document.querySelector(
      '.home'
    ) as HTMLElement;
    home.style.color = 'white';
    const hand = document.querySelector(
      '.hand'
    ) as HTMLElement;
    hand.style.color = 'white';
    const star = document.querySelector(
      '.star'
    ) as HTMLElement;
    star.style.color = '#68F4A0';
    const tiket = document.querySelector(
      '.tiket'
    ) as HTMLElement;
    tiket.style.color = 'white';
    const user = document.querySelector(
      '.user'
    ) as HTMLElement;
    user.style.color = 'white';
  }
  tiket() {
    this.router.navigate(['logged/extract']);

    this.homeicon = true;
    this.homeicongreen = false;
  
    this.handicon = true;
    this.handicongreen = false;
  
    this.staricon = true;
    this.staricongreen = false;
  
    this.tiketicon = false;
    this.tiketicongreen = true;
  
    this.usericon = true;
    this.usericongreen = false;

    const home = document.querySelector(
      '.home'
    ) as HTMLElement;
    home.style.color = 'white';
    const hand = document.querySelector(
      '.hand'
    ) as HTMLElement;
    hand.style.color = 'white';
    const star = document.querySelector(
      '.star'
    ) as HTMLElement;
    star.style.color = 'white';
    const tiket = document.querySelector(
      '.tiket'
    ) as HTMLElement;
    tiket.style.color = '#68F4A0';
    const user = document.querySelector(
      '.user'
    ) as HTMLElement;
    user.style.color = 'white';
  }
  user() {
    this.router.navigate(['logged/profile']);
    this.homeicon = true;
    this.homeicongreen = false;
  
    this.handicon = true;
    this.handicongreen = false;
  
    this.staricon = true;
    this.staricongreen = false;
  
    this.tiketicon = true;
    this.tiketicongreen = false;
  
    this.usericon = false;
    this.usericongreen = true;

    const home = document.querySelector(
      '.home'
    ) as HTMLElement;
    home.style.color = 'white';
    const hand = document.querySelector(
      '.hand'
    ) as HTMLElement;
    hand.style.color = 'white';
    const star = document.querySelector(
      '.star'
    ) as HTMLElement;
    star.style.color = 'white';
    const tiket = document.querySelector(
      '.tiket'
    ) as HTMLElement;
    tiket.style.color = 'white';
    const user = document.querySelector(
      '.user'
    ) as HTMLElement;
    user.style.color = '#68F4A0';
  }

}
