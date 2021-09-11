import { Injectable, Input } from '@angular/core';
import { Todo } from '../models/ToDo';

const LOCAL_STORAGE_KEY:string = "todolist";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Todo[];
  constructor() { 
    this.tasks = this.loadLocalData();
  } 
  
  getTasks():Todo[] {
    return this.tasks
  }   

  addTasks(task:Todo) {
    this.tasks.push(task)
    console.log(this.tasks)
    this.saveLocalData()
  }

  removeTasks(task:Todo) {
    console.log("clicou")
    this.tasks.splice(this.tasks.indexOf(task), 1)
    this.saveLocalData()
  }

  public saveLocalData(): void {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.tasks));
  }

  private loadLocalData(): Todo[] {
    const localData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  }

}
