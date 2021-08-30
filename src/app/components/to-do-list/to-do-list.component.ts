import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  tasks:Todo[] = [
    {
      done: true,
      text: "Fazer almoço",
      priority: 3
    },
    {
      done: false,
      text: "Colocar o lixo pra fora",
      priority: 1
    },
    {
      done: true,
      text: "Dar comida ao cachorro",
      priority: 2
    },
    {
      done: false,
      text: "Pagar conta de luz",
      priority: 3
    },
    {
      done: false,
      text: "Comprar pão",
      priority: 1
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
