import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TermsService } from 'src/app/service/terms.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  terms: any[];
  constructor(
    private termsService: TermsService,
    private router: Router 
  ) { }
 
  ngOnInit() {
    this.terms = this.termsService.profileAbout;
  }

  goLinkedin() {
    window.open('https://www.linkedin.com/',' _blank')
  }

}
