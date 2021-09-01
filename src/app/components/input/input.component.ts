import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/ToDo';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  service: TaskService;
  taskInput: string = '';

  constructor(service: TaskService) {
    this.service = service;
  }

  addTasks() {
    var task: Todo = {
      done: false,
      text: this.taskInput,
      priority: 1,
    };
    this.taskInput = ""
    this.service.addTasks(task)
  }

  ngOnInit(): void {}
}
