import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExtractService } from 'src/app/service/extract.service';
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
  infoExtract: any;
  infoCardsFilter: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private extractService: ExtractService,
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
    this.infoBalance = this.extractService.balance;
    this.infoExtract = this.extractService.extract;
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

  selectitem(pathName: any) {
    document.querySelectorAll(".mounth-selected").forEach(element => {
      element.classList.remove("mounth-selected");
    });
    document.getElementById(pathName)!.classList.add("mounth-selected");
    
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


  get formControl(){
    return this.form.controls;
  }
    // Rota ainda não definida
    goMoreSold(){
      this.router.navigate(['#']);
    }
  
}