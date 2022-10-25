import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  homeicon = false;
  homeicongreen = true;

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

  selectitem(pathName: any) {
    document.querySelectorAll(".selected").forEach(element => {
      element.classList.remove("selected");
    });
    document.getElementById(pathName)!.classList.add("selected");
    
  }

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

    
  }
}
