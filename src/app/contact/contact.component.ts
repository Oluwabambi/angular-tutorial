import { Component } from '@angular/core';
import { ApiHandlerService } from '../services/api-handler.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { StudentsService } from '../services/students/students.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  loading: boolean = false;

  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required]),
    numOfCredits: new FormControl('', [Validators.required])
  })

  constructor( private api: StudentsService ) {}

  addStudent(data: any) {
    this.loading = true;
    this.api.addStudent(data).subscribe({
      next: (response) => {
        this.loading = false;
        console.log(this.studentForm);    // status shows as valid
        console.log(response);
        Swal.fire({
          title: 'Form Submitted',
          text: 'you can fill again',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            // Swal.fire('Saved!', '', 'success');
            this.studentForm.reset();   // you can reset form on clicking confirm
          } else if (result.isDenied) {
            // Swal.fire('Changes are not saved', '', 'info');
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
