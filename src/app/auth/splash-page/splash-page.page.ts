import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Controller,

} from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  Autoplay,
  Controller
]);
@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.page.html',
  styleUrls: ['./splash-page.page.scss'],
})
export class SplashPagePage implements OnInit {


  splash = true;
  splashstaps = false;
  count: number;
  constructor(
    private router: Router
  ) { this.count = 0; }

  ngOnInit() {
    setTimeout(() => {
      this.splash = false;
      this.splashstaps = true;
    }, 1000
    );
  }
  swipeNext() {
    const co = this.count++;
    if (co < 3) {
      this.router.navigate(['/home'])
    }
  }
}
