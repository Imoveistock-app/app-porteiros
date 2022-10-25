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
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(localStorage.getItem('user') !== null) {
      this.router.navigate(['auth/login'])
    }

    setTimeout(() => {
      this.splash = false;
      this.splashstaps = true;
    }, 1000
    );
  }


  goSwipeHome() {
    let count = 0;
    const co = count++;
    if (co === 0) {
      this.router.navigate(['auth/login'])
    }
  }

  goHome(){
    this.router.navigate(['auth/login'])
  }
}
