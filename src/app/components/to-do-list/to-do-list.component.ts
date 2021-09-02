import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/ToDo';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @Input() tasks:Todo[];
  // private ts: TaskService = new TaskService();  
  
  constructor(ts:TaskService) { 
    this.tasks = ts.getTasks();
  }

  ngOnInit(): void {
  }

}
