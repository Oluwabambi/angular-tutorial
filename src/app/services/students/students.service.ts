import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private api: ApiHandlerService ) { }

  getStudents() {
    return this.api.get('students');
  }

  getStudentById(id:any) {
    return this.api.get(`students/${id}`);
  }

  addStudent(data: any) {
    return this.api.post('students', data);
  }
}
