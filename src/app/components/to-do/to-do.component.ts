import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/ToDo';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() tasks!:Todo;  
  service:TaskService 
  constructor(s:TaskService) {
    this.service = s
  }
     
  ngOnInit(): void {
  }

}
