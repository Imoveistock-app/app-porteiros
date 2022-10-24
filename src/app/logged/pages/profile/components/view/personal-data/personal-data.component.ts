import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent implements OnInit {


  mokprofile: any;

  constructor(
    private perfilService: PerfilService,
  ) {
  }

  ngOnInit() {
    this.mokprofile = this.perfilService.personalData;
  }





}
