import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indicate',
  templateUrl: './indicate.component.html',
  styleUrls: ['./indicate.component.scss'],
})
export class IndicateComponent implements OnInit {
  formIndicate: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.formIndicate = this.formBuilder.group({
      cep: ['', [Validators.required]],
      road: ['', [Validators.required]],
      numberResidence: ['', [Validators.required]],
      complement: ['', [Validators.required]],
      ownerName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      ownerContact: ['', [Validators.required]]
    });
  }

  ngOnInit() {}


}
