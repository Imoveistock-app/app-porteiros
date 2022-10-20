import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {


  form: FormGroup;
  infoBalance: any;
  collapsed: number[] = [];
  infoCards: any;
  infoFilter: any;
  infoCardsFilter: any[] = [];
  balance = true;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      inputEveryone: [false, []],
      inputAnalysis: [false, []],
      inputProgress: [false, []],
      inputDisapproved: [false, []],
      inputApproved: [false, []],
    });
  }

  ngOnInit() {
    this.infoBalance = this.homeService.balance;
    this.infoCards = this.homeService.cards;
    this.infoCardsFilter = this.homeService.cards;
    this.infoFilter = this.homeService.filterCard;
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
  handlerFillter() {
    if (this.form.value.inputEveryone){
      this.infoCardsFilter = this.infoCards; return;
    }
    this.infoCardsFilter = this.infoCards.filter
    (a => this.form.value.inputAnalysis && a.status === 'Em análise'||
    this.form.value.inputProgress && a.status === 'Em andamento'||
    this.form.value.inputDisapproved && a.status === 'Reprovado'||
    this.form.value.inputApproved && a.status === 'Aprovado');
  }

  handlerFillterListHorizon() {
    // 
  }
  get formControl(){
    return this.form.controls;
  }
    // Rota ainda não definida
    goMoreSold(){
      this.router.navigate(['#']);
    }
  
}