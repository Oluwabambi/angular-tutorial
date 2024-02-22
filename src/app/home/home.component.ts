import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Angular Tutorial';
  userName: any;

  newForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    age: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    summary: new FormControl('', [Validators.required]),
  })

  ngOnInit() {
    console.log(this.newForm);
    const nameVal = this.newForm.controls.name; // save the name FormControl to a variable
    nameVal.valueChanges.subscribe(value => { //   listen for changes in the value of "name"
      this.userName = value // assign the userName property to the changed value
    });
    
  }

  showAlert() {
    Swal.fire('Method called');
  }

  onSubmit() {
    if (this.newForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'This form is invalid',
        icon: 'error'
      })
    } else {
      console.log(this.newForm.value);
      this.newForm.reset();
      Swal.fire('Success', 'Data has been submitted', 'success')
    }
  }
}
