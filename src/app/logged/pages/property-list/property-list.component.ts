import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HomeService } from 'src/app/service/home.service';
import { PropertyIndicationService } from 'src/app/service/property-indication.service';
import { ListPropertyIndicationResponseDto } from '../../../dtos/list-property-indication-response.dto';
import { PaginateQuerryRequestDto } from '../../../dtos/paginate-querry-request.dto';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {

  form: FormGroup;

  infoBalance: any;
  collapsed: number[] = [];
  infoCards: any;
  infoCardsFilter: any[] = [];
  balance = true;

  public posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];


  public count = 0;


  public itemsPerPage = 5;


  public currentPage = 1;

  paginateQuerryRequest: PaginateQuerryRequestDto;

  propertyListAll: ListPropertyIndicationResponseDto[];
  pagination: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private router: Router,
    private propertyIndicationService: PropertyIndicationService,
    private toastController: ToastController
  ) {
    this.form = this.formBuilder.group({
      filter: ['']
    });
  }

  ngOnInit() {
    this.infoBalance = this.homeService.balance;
    this.infoCards = this.homeService.cards;
    this.infoCardsFilter = this.homeService.cards;

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



  public onChange(event): void {
    console.dir(event);
    this.currentPage = event;
  }

  ionViewWillEnter() {
    // this.propertyIndicationService.list()
  }

  changeEye() {
    this.balance = !this.balance;
  }


  showcard(id: number) {
    const exist = this.collapsed.find(a => a == id);
    if (exist) {
      this.collapsed = this.collapsed.filter(a => a != id);
      return;
    }
    this.collapsed.push(id);
  }

  handler(id: number): boolean {
    return !!this.collapsed.find(a => a == id);
  }


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  // logic-filter
  async handlerFillter() {

    this.propertyListAll = [];

    if (this.form.controls.filter.value === 'all') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0
      }

      this.propertyIndicationService.list(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'underAnalysis') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'underAnalysis'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'inProgress') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'inProgress'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'Published') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'Published'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'underNegotiation') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'underNegotiation'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'recap') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'recap'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'disapproved') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'disapproved'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'discarded') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'discarded'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'unpublished') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'unpublished'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'approved') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'approved'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'rented') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'rented'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'rentedWithPartnership') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'rentedWithPartnership'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'sold') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'sold'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (this.form.controls.filter.value === 'soldInPartnership') {

      this.paginateQuerryRequest = {
        skip: 0,
        take: 0,
        processStatus: 'soldInPartnership'
      }

      this.propertyIndicationService.listByStatus(this.paginateQuerryRequest).subscribe(
        success => {
          this.propertyListAll = success;
          this.isModalOpen = false;
        },
        error => {
          console.error(error)
        }
      )
    } else if (
      this.form.controls.filter.value === '') {
      const toast = await this.toastController.create({
        message: `Selecione um filtro!`,
        duration: 1500,
        position: 'top',
        color: 'danger',
      });
      toast.present();
    }

  }

  // Rota ainda não definida
  goMoreSold() {
    // Rota ainda não definida
  }

}
