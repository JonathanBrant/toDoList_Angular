import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/ToDo';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  public tasks!:Todo[];

  @Output() addNewTask = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {}

  adicionandoNovaTarefa() {
    let input: HTMLInputElement = <HTMLInputElement>(document.querySelector('input'));
    console.log(typeof(input.value))
    this.addNewTask.emit(input.value)
    input.value = '';
  }

}
