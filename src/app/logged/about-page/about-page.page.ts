import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TermsService } from 'src/app/service/terms.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.page.html',
  styleUrls: ['./about-page.page.scss'],
})
export class AboutPagePage implements OnInit {


  terms: any[];
  constructor(
    private termsService: TermsService,
    private router: Router 
  ) { }
 
  ngOnInit() {
    this.terms = this.termsService.profileAbout;
  }

  goProfile(){
    // provavelmente com mudança de rota
    this.router.navigate(['/profile']);
  }

}
