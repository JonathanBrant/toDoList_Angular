import { TaskService } from './services/task.service';
import { Component } from '@angular/core';
import { Todo } from './models/ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'toDoList-Angular';
  TaskService: TaskService = new TaskService();
  tasks!: Todo[];  

  
}
