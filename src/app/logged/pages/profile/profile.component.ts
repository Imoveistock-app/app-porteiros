import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserEditPhotoRequestDto } from 'src/app/dtos/user-edit-photo-request.dto';
import { PerfilService } from 'src/app/service/perfil.service';
import { UserGetResponseDto } from '../../../dtos/user-get-response.dto';
import { UserService } from '../../../service/user.service';

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

  urls: any = [];

  user: UserGetResponseDto = {
    cpf: '',
    email: '',
    name: '',
    personalData: {
      birthDate: new Date,
      state: '',
      city: '',
      bankInfo: {
        name: '',
        agencyNumber: '',
        accountNumber: ''
      }
    },
    phone: '',
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

  form: FormGroup;

  requestPhoto: UserEditPhotoRequestDto;

  constructor(
    private perfilService: PerfilService,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {
    this.form = this.formBuilder.group({
      image: [''],
    })
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
      this.personaldata = true;
      this.personalform = false;
      this.workform = false;
      this.workdata = false;
    });
  }

  ngOnInit() {
    this.mokprofile = this.perfilService.card;

    // this.userService.getUser().subscribe(
    //   success => {
    //     this.user = success;
    //     if (this.user?.photo?.location) {
    //       this.urls.push(this.user.photo.location)
    //     }
    //   },
    //   error => {
    //     console.error(error)
    //   }
    // );
  }

  openModalLogout() {
    this.isModalOpen = true;
  }

  goLogout() {
    this.isModalOpen = false;

    localStorage.removeItem('user');

    setTimeout(() => {
      this.router.navigate(['auth/login']);
    }, 1000);

  }

  closeModalLogout() {
    this.isModalOpen = false;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.urls = [];
          this.urls.push(event.target.result);

          this.requestPhoto = {
            photo: event.target.result
          };
          this.userService.editPhoto(this.requestPhoto).subscribe(
            async success => {
              this.userService.getUser().subscribe(
                success => {
                  let user = JSON.stringify(success);
                  localStorage.setItem('userDto', user)
                  window.location.reload();
                },
                error => {
                  console.error(error)
                }
              )
              const toast = await this.toastController.create({
                message: `Foto do perfil alterada com sucesso!`,
                duration: 1500,
                position: 'top',
                color: 'success',
              });
              toast.present();
            },
            async error => {
              const toast = await this.toastController.create({
                message: `Erro ao alterar foto do perfil!`,
                duration: 1500,
                position: 'top',
                color: 'danger',
              });
              toast.present();
            }
          )
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
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

  changePageEdit(value) {
    if (value === 'personal') {
      this.personalform = true;
      this.workform = false;
    } else if (value === 'work') {
      this.personalform = false;
      this.workform = true;
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
}