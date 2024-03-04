import { Component } from '@angular/core';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: any = [];

  // Inject TasksService to use its functions in the component
  constructor( private taskService: TasksService ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe({ // Subscribe to observable returned by getTasks() function
      next: (res) => {
        console.log(res);
        this.tasks = res; //  Assign response data to the "tasks" property
      },
      error: (error) => {
        console.log(error);
        // if (error.status === 404) {
        //   alert('api not found')
        // } else if(error.status === 401) {
        //   alert('you are not authenticated')
        // }
        // alert(error.message);
      }
    })
  }

}
