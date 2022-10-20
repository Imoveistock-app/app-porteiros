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
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {


  splash = true;
  splashstaps = false;
  count = 0;
  constructor(
    private router: Router
  ) { }

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
      this.router.navigate(['logged/home'])
    }
  }
  goHome(){
    this.router.navigate(['logged/home'])
  }
}
