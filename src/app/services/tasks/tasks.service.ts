import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor( private api: ApiHandlerService ) { }

  getTasks() {
    return this.api.get('tasks');
  }

  getTaskById(id:any) {
    return this.api.get(`tasks/${id}`);
  }

  addTask(data: any) {
    return this.api.post('tasks', data);
  }

}
