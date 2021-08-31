import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/ToDo';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() tasks!:Todo; 
  

  constructor() { }

  

  ngOnInit(): void {
  }

}
