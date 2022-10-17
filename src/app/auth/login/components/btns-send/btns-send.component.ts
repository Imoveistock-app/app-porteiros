import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btns-send',
  templateUrl: './btns-send.component.html',
  styleUrls: ['./btns-send.component.scss'],
})
export class BtnsSendComponent implements OnInit {

  smsstap = true;
  constructor() { }

  ngOnInit() {}
  sendSMS(){

  }
}
