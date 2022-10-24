import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  

  private subject = new Subject<any>();
  bot: any;

  changeEditPerson() {
    this.subject.next('');
  }

  getChangeEditPerson(): Observable<any> {
    return this.subject.asObservable();
  }

  changeEditWork() {
    this.subject.next('');
  }

  getChangeEditWork(): Observable<any> {
    return this.subject.asObservable();
  }


  card = [
    {
      name: "Mario Silva!",
      tel: "51991179134",
      img: "https://i.pinimg.com/originals/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.png",
    }
  ];

  personalData= [
    {
      name: "Mario Silva",
      email: "mariosilva@gmail.com",
      cpf:"04608232705",
      phone: "41991179134",
      birthdate: "08051980",
      state: "Paraná",
      city: "Curitiba",
      bank: "Nubank S.A",
      agency: "0001",
      current: "432423345"
    }
  ];

  workData= [
    {
      scale: "1236",
      conciergeday1: "Fernando Tavares",
      conciergeday2: "Ana lucía",
      conciergenight1: "Marcos Ferraz",
      conciergenight2: "Mario Silva",
      caretaker:  "Roberto Maria",
      receptionist: '-',
      vigilant: "Ricardo Alves",
      supervisor: "-",
      manager: "-",

      namecondominium: "edifício morada nobre",
      edcondominium: "Nome da rua super grande",
      numbercondominium: "345",
      district:"Água Verde",
      cep: '83394430',
      complement: "Apartamento, bloco C",

      namesyndicate: "fabio rodrigues Silva",
      contactsyndicate: "41993388212",
      category: "Apartamentos",
      tower: "4",
      floors: "25",
      apartamentfloors: "4",
      propertieslocation: "4",
      propertiessold: "9"


    }
  ];
}