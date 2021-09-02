import { Injectable, Input } from '@angular/core';
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

  removeTasks(task:Todo) {
    console.log("clicou")
    this.tasks.splice(this.tasks.indexOf(task), 1)
  }

}
