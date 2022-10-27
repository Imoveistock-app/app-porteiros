import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/service/perfil.service';
import { UserGetResponseDto } from '../../../../../../dtos/user-get-response.dto';

@Component({
  selector: 'app-work-data',
  templateUrl: './work-data.component.html',
  styleUrls: ['./work-data.component.scss'],
})
export class WorkDataComponent implements OnInit {
  
  
  mokprofile: any;

  response: UserGetResponseDto;

  constructor(
    private perfilService: PerfilService,
  ) { 
  }

  ngOnInit() {
    this.mokprofile = this.perfilService.workData;
    let user: any = localStorage.getItem('userDto');
    this.response = JSON.parse(user);

  }

}
