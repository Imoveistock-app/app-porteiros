import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtractService {

  balance = [
    {
      money: "35000",
    }
  ];
  indicate= [
    {
      name: "Mario Silva!",
      tel: "51991179134",
      img: "https://i.pinimg.com/originals/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.png",
    }
  ]
  extract = [
    { 
      id: 1,
      mounth: "Janeiro",
      PersonName: 'Enéas carneiro',
      localName: "Nome do edifício grande",
      apartment: "45",
      date: "08052021",
      tower: "01",
      block: "A",
      valueExtract: "8500",
    },
    {
      id: 2,
      mounth: "Fevereiro",
      PersonName: 'Enéas carneiro',
      localName: "Nome do edifício grande",
      apartment: "45",

      date: "08052021",
      tower: "01",
      block: "A",
      valueExtract: "8500",
    },
    {
      id: 3,
      mounth: "Março",
      PersonName: 'Enéas carneiro',
      localName: "Nome do edifício grande",
      apartment: "45",
      date: "08052021",
      tower: "01",
      block: "A",
      valueExtract: "8500",
    },
    {
      id: 4,
      mounth: "Abril",
      PersonName: 'Enéas carneiro',
      localName: "Nome do edifício grande",
      apartment: "45",
      date: "08052021",
      tower: "01",
      block: "A",
      valueExtract: "8500",
    },
    {
      id: 5,
      mounth: "Maio",
      PersonName: 'Enéas carneiro',
      localName: "Nome do edifício grande",
      apartment: "45",
      date: "08052021",
      tower: "01",
      block: "A",
      valueExtract: "8500",
    },
    {
      id: 6,
      mounth: "Junho",
      PersonName: 'Enéas carneiro',
      localName: "Nome do edifício grande",
      apartment: "45",
      date: "08052021",
      tower: "01",
      block: "A",
      valueExtract: "8500",
    },
  ];
}
