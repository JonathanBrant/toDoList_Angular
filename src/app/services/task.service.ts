import { Injectable } from '@angular/core';
import { Todo } from '../models/ToDo';

const tasks:Todo[] =[
  {
    done: true,
    text: "Fazer almoço",
    priority: 3
  }  
]

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { } 
  
  getTasks():Todo[] {
    return tasks
  }   

  addTasks(t:string):void {
    tasks.push({
      done: false,
      text: t,
      priority: 1,
    })
    console.log(tasks)
  }

}
