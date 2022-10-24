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
  personalform = false;
  logoutbtn = true;
  backeditprofile = false;
  editprofile = true;
  geralzone = true;
  cameraprofile = false;
  changedataprofile = true;
  changedataprofileedit = false;
  workdata = false;
  workform = false;
  newImgUp: any;
  isModalOpen: boolean = false;

  
  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) { }

  ngOnInit() {
    this.mokprofile = this.perfilService.card;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  goLogout(isOpen: boolean){
    setTimeout(() =>{
      this.router.navigate(['auth/login']);
    }, 500); 
    this.isModalOpen = isOpen;
  }

  editProfile(){
      this.logoutbtn = false;
      this.geralzone = false;
      this.cameraprofile = true;
      this.backeditprofile = true;
      this.editprofile = false;
      this.changedataprofileedit = true;
      this.changedataprofile = false;
      this.personaldata = false;
      this.personalform = true;
  }
  backEdit(){
    this.logoutbtn = true;
    this.geralzone = true;
    this.cameraprofile = false;
    this.backeditprofile = false;
    this.editprofile = true;
    this.personaldata = true;
    this.personalform = false;
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
  workPageEdit(){
    this.personalform = false;
    this.workform = true;
  }
  personalPageEdit(){
    this.personalform = true;
    this.workform = false;
  }
}
