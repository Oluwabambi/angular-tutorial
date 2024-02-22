import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROES } from '../heroes';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  heroes = HEROES;
  selectedHero: any;

  constructor( private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() {
    const routeId = this.route.snapshot.params['id'];
    console.log(typeof routeId);
    
    this.selectedHero = this.heroes.find(hero => hero.id === +routeId)
    console.log(this.selectedHero);
  }

  goBack() {
    history.back();
  }

}
