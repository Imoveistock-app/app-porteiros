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
      date: '20052021',
      datecard: '08052021'
    }
  ];

  cards = [
    {
      id: 1,
      status: "Em análise",
      PersonName: 'Enéas carneiro',
      Typebusiness: 'Direita',
      statustype: "status-type-analysis",
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 2,
      status: "Em andamento",
      PersonName: 'felipe neto',
      Typebusiness: 'Parceira',
      statustype: "status-type-progress",
      type: "Locação",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {id: 3,
      status: "Reprovado",
      statustype: "status-type-disapproved",
      PersonName: 'Arnold Alois Schwarzenegger',
      Typebusiness: 'Direita',
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
   
    {
      id: 4,
      status: "Publicado",
      statustype: "status-type-progress",

      PersonName: 'Pedro carvalho silva barros pereira',
      Typebusiness: 'Parceira',
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 5,
      status: "Em negociação",
      statustype: "status-type-progress",
      PersonName: 'Pedro carvalho silva barros pereira',
      Typebusiness: 'Parceira',
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 6,
      status: "Alugado",
      statustype: "status-type-approved",
      PersonName: 'Pedro carvalho silva barros pereira',
      Typebusiness: 'Parceira',
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 7,
      status: "Alugado em parceria",
      statustype: "status-type-approved",
      PersonName: 'Pedro carvalho silva barros pereira',
      Typebusiness: 'Parceira',
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 8,
      status: "Vendido em parceria",
      statustype: "status-type-approved",
      PersonName: 'Pedro carvalho silva barros pereira',
      Typebusiness: 'Parceira',
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 9,
      status: "Aprovado",
      statustype: "status-type-approved",
      PersonName: 'Pedro carvalho silva barros pereira',
      Typebusiness: 'Parceira',
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 10,
      status: "Despublicado",
      statustype: "status-type-disapproved",
      PersonName: 'Pedro carvalho silva barros pereira',
      Typebusiness: 'Parceira',
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    {
      id: 11,
      status: "Reciclagem",
      statustype: "status-type-progress",
      PersonName: 'Pedro carvalho silva barros pereira',
      Typebusiness: 'Parceira',
      type: "Venda",
      localName: "Nome do edifício grande",
      Value: '30000',
      localDetails: "Rua Eufrásio Correa , 456 , Bloco C"
    },
    
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
      status: "Publicado",
    },
    {
      id: 5,
      status: "Em negociação",
    },
    {
      id: 6,
      status: "Alugado",
    },
    {
      id: 7,
      status: "Alugado em parceria",
    },
    {
      id: 8,
      status: "Vendido em parceria",
    },
    {
      id: 9,
      status: "Aprovado",
    },
    {
      id: 10,
      status: "Despublicado",
    },
    {
      id: 11,
      status: "Reciclagem",
    },
  ]
}
