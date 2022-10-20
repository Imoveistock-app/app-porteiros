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

  get formControl(){
    return this.form.controls;
  }
    // Rota ainda não definida
    goMoreSold(){
      this.router.navigate(['#']);
    }
  
}

//   form: FormGroup;
//   infoBalance: any;
//   infoExtract: any;
//   infoExtractFilter: any[] = [];

//   constructor(
//     private formBuilder: FormBuilder,
//     private extractService: ExtractService,
//     private router: Router
//   ) {
//     this.form = this.formBuilder.group({
//       Everyone: [false, []],
//       jan: [false, []],
//       feb: [false, []],
//       mar: [false, []],
//       apr: [false, []],
//       may: [false, []],
//       jun: [false, []],
//       jul: [false, []],
//       ago: [false, []],
//       sep: [false, []],
//       oct: [false, []],
//       nov: [false, []],
//       dec: [false, []],
//     });
//   }

//   ngOnInit() {
//     this.infoBalance = this.extractService.balance;
//     this.infoExtract = this.extractService.extract;
//     this.infoExtractFilter = this.extractService.extract;
//   }

//   selectitem(pathName: any) {
//     document.querySelectorAll(".mounth-selected").forEach(element => {
//       element.classList.remove("mounth-selected");
//     });
//     document.getElementById(pathName)!.classList.add("mounth-selected");
//   }

//   // logic-filter
//   handlerFillter() {
//     if (this.form.value.Everyone){
//       this.infoExtractFilter = this.infoExtract; return;
//     }
//     console.log(this.form.value.jan);
//     this.infoExtractFilter = this.infoExtract.filter
//     (a => 
//       this.form.value.jan && a.mounth === 'Janeiro'||
//       this.form.value.feb && a.mounth === 'Fevereiro'||
//       this.form.value.mar && a.mounth === 'Março'||
//       this.form.value.apr && a.mounth === 'Abril'||
//       this.form.value.may && a.mounth === 'Maio'||
//       this.form.value.kun && a.mounth === 'Junho'||
//       this.form.value.jul && a.mounth === 'Julho'||
//       this.form.value.aug && a.mounth === 'Agosto'||
//       this.form.value.sep && a.mounth === 'Setembro'||
//       this.form.value.oct && a.mounth === 'Outubro'||
//       this.form.value.nov && a.mounth === 'Novembro'||
//       this.form.value.dec && a.mounth === 'Dezembro'
//     );

//   }


//   get formControl(){
//     return this.form.controls;
//   }
//     // Rota ainda não definida
//     goMoreSold(){
//       this.router.navigate(['#']);
//     }
  
// }