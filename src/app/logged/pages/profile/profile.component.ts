import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  changeSubscriptionPerson: Subscription;
  changeSubscriptionWork: Subscription;



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
  ) {
    this.changeSubscriptionPerson = this.perfilService.getgetOutEditPerson().subscribe(() => {
      this.logoutbtn = true;
      this.geralzone = true;
      this.cameraprofile = false;
      this.backeditprofile = false;
      this.editprofile = true;
      this.personaldata = true;
      this.personalform = false;
      this.workform = false;
      this.workdata = false;
      this.changedataprofileedit = false;
      this.changedataprofile = true;
    });
    this.changeSubscriptionWork = this.perfilService.getgetOutEditWork().subscribe(() => {
      this.logoutbtn = true;
      this.changedataprofileedit = false;
      this.changedataprofile = true;
      this.geralzone = true;
      this.cameraprofile = false;
      this.backeditprofile = false;
      this.editprofile = true;
      this.personaldata = false;
      this.personalform = false;
      this.workform = false;
      this.workdata = true;
    });
  }

  ngOnInit() {
    this.mokprofile = this.perfilService.card;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  goLogout(isOpen: boolean) {
    setTimeout(() => {
      this.router.navigate(['auth/login']);
    }, 500);
    this.isModalOpen = isOpen;
  }

  editProfile() {
     this.changedataprofileedit = true;
     this.changedataprofile = false;
     if (this.personaldata === true) {
      this.logoutbtn = false;
      this.geralzone = false;
      this.cameraprofile = true;
      this.backeditprofile = true;
      this.editprofile = false;
      this.personaldata = false;
      this.personalform = true;
      this.workdata = false;
      this.workform = false;
    } else {
      this.logoutbtn = false;
      this.geralzone = false;
      this.cameraprofile = true;
      this.backeditprofile = true;
      this.editprofile = false;
      this.personaldata = false;
      this.personalform = false;
      this.workdata = false;
      this.workform = true;
    }


  }
  backEdit() {
    this.changedataprofileedit = false;
    this.changedataprofile = true;
    if (this.personalform === true) {
      this.logoutbtn = true;
      this.geralzone = true;
      this.cameraprofile = false;
      this.backeditprofile = false;
      this.editprofile = true;
      this.personaldata = true;
      this.personalform = false;
      this.workdata = false;
      this.workform = false;
    } else {
      this.logoutbtn = true;
      this.geralzone = true;
      this.cameraprofile = false;
      this.backeditprofile = false;
      this.editprofile = true;
      this.personaldata = false;
      this.personalform = false;
      this.workdata = true;
      this.workform = false;
    }

  }



  goAbout() {
    this.router.navigate(['logged/about']);
  }
  goPrivacyPolicy() {
    this.router.navigate(['logged/privacy-policy']);

  }
  goTermsConditions() {
    this.router.navigate(['logged/terms-conditions']);
  }
  workPage() {
    this.personaldata = false;
    this.workdata = true;
  }
  personalPage() {
    this.personaldata = true;
    this.workdata = false;
  }
  workPageEdit() {
    this.personalform = false;
    this.workform = true;
  }
  personalPageEdit() {
    this.personalform = true;
    this.workform = false;
  }
}
