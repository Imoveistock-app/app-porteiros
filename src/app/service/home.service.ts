import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  home = [
    {
      name: 'Mario Silva',
      img: 'https://i.pinimg.com/originals/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.png',
    },
  ];

  balance = [
    {
      money: "35000",
      date: '20052021'
    }
  ];

  cards = [
    {
      id: 1,
      status: "Em análise",
      statustype: "status-type-analysis",
      type: "Venda",
      localName: "Nome do edifício grande",
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 2,
      status: "Em andamento",
      statustype: "status-type-progress",
      type: "Locação",
      localName: "Nome do edifício grande",
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {id: 3,
      status: "Reprovado",
      statustype: "status-type-disapproved",
      type: "Venda",
      localName: "Nome do edifício grande",
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 4,
      status: "Aprovado",
      statustype: "status-type-approved",
      type: "Venda",
      localName: "Nome do edifício grande",
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    }
  ]
  filterCard = [
    {
      id: 1,
      status: "Em análise",
    },
    {
      id: 2,
      status: "Em andamento",
    },
    {
      id: 3,
      status: "Reprovado",
    },
    {
      id: 4,
      status: "Aprovado",
    },
  ]
}
