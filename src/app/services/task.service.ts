import { Injectable } from '@angular/core';
import { Todo } from '../models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Todo[];
  constructor() { 
    this.tasks = [
    ]
  } 
  
  getTasks():Todo[] {
    return this.tasks
  }   

  addTasks(task:Todo) {
    this.tasks.push(task)
    console.log(this.tasks)
  }

}
