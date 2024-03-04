import { Component } from '@angular/core';
import { HEROES } from '../heroes';
import { ApiHandlerService } from '../services/api-handler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  heroes = HEROES;

  constructor( private api: ApiHandlerService ) {}

  ngOnInit() {
    // this.api.get().subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   },
    //   error: () => {}
    // })
  }
}
