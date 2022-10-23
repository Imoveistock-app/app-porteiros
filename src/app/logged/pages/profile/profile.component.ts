import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  mokprofile: any;
  personaldata = true;
  workdata = false;

  
  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) { }

  ngOnInit() {
    this.mokprofile = this.perfilService.card;
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
