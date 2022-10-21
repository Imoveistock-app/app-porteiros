import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExtractService } from 'src/app/service/extract.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {



  form: FormGroup;
  collapsedevery= true;
  collapsedJan= true;
  collapsedFeb= true;
  collapsedMar= true;
  collapsedApr= true;
  collapsedMay= true;
  collapsedJun= true;
  collapsedJul= true;
  collapsedAgo= true;
  collapsedSep= true;
  collapsedOct= true;
  collapsedNov= true;
  collapsedDec= true;


  infoBalance: any;
  infoExtract: any;
  infoExtractFilter: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private extractService: ExtractService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      everyone: [false, []],
      jan: [false, []],
      feb: [false, []],
      mar: [false, []],
      apr: [false, []],
      may: [false, []],
      jun: [false, []],
      jul: [false, []],
      ago: [false, []],
      sep: [false, []],
      oct: [false, []],
      nov: [false, []],
      dec: [false, []],
    });
  }

  ngOnInit() {
    this.infoBalance = this.extractService.balance;
    this.infoExtract = this.extractService.extract;
    this.infoExtractFilter = this.extractService.extract;
  }
  
  // logic-filter
  handlerFillter() {
    if (this.form.value.everyone) {
      this.infoExtractFilter = this.infoExtract; return;
    }
    console.log(this.form.value.jan);
    this.infoExtractFilter = this.infoExtract.filter
      (a =>
        this.form.value.jan && a.mounth === 'Janeiro' ||
        this.form.value.feb && a.mounth === 'Fevereiro' ||
        this.form.value.mar && a.mounth === 'Março' ||
        this.form.value.apr && a.mounth === 'Abril' ||
        this.form.value.may && a.mounth === 'Maio' ||
        this.form.value.kun && a.mounth === 'Junho' ||
        this.form.value.jul && a.mounth === 'Julho' ||
        this.form.value.aug && a.mounth === 'Agosto' ||
        this.form.value.sep && a.mounth === 'Setembro' ||
        this.form.value.oct && a.mounth === 'Outubro' ||
        this.form.value.nov && a.mounth === 'Novembro' ||
        this.form.value.dec && a.mounth === 'Dezembro'
      );
  }get formControl() {return this.form.controls;}


  selectitem(): void {
    this.collapsedevery = !this.collapsedevery;
  }
  selectitemJan(): void { this.collapsedJan = !this.collapsedJan;}
  selectitemFeb(): void { this.collapsedFeb = !this.collapsedFeb;}
  selectitemMar(): void { this.collapsedMar = !this.collapsedMar;}
  selectitemApr(): void { this.collapsedApr = !this.collapsedApr;}
  selectitemMay(): void { this.collapsedMay = !this.collapsedMay;}
  selectitemJun(): void { this.collapsedJun = !this.collapsedJun;}
  selectitemJul(): void { this.collapsedJul = !this.collapsedJul;}
  selectitemAgo(): void { this.collapsedAgo = !this.collapsedAgo;}
  selectitemSep(): void { this.collapsedSep = !this.collapsedSep;}
  selectitemOct(): void { this.collapsedOct = !this.collapsedOct;}
  selectitemNov(): void { this.collapsedNov = !this.collapsedNov;}
  selectitemDec(): void { this.collapsedDec = !this.collapsedDec;}

  
  
  // Rota ainda não definida
  goMoreSold() {
    this.router.navigate(['#']);
  }

}