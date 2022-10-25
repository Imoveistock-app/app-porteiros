import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-work-data',
  templateUrl: './work-data.component.html',
  styleUrls: ['./work-data.component.scss'],
})
export class WorkDataComponent implements OnInit {
  
  
  mokprofile: any;

  constructor(
    private perfilService: PerfilService,

  ) { 
  }

  ngOnInit() {
    this.mokprofile = this.perfilService.workData;

  }

}
