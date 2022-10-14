import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.page.html',
  styleUrls: ['./privacy-policy-page.page.scss'],
})
export class PrivacyPolicyPagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goProfile(){
    // provavelmente alteravel
    this.router.navigate(['/profile']);
  }

}
