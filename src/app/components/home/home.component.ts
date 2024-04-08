import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ex {
  name: string;
  type: string;
  routerLink: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  exercises: ex[] = [
    {
      name: "slide",
      type: "kkkk",
      routerLink: "SlideBasic",
    },
    {
      name: "TodoApp",
      type: "kkkk",
      routerLink: "TodoApp",
    },
    
  ]

  constructor(
    // private bigExerciseService: BigExercisesService,
    // private route: ActivatedRoute,
    private router: Router,

  ) { }

  navigateToExerciseDetails(exercises: string) {
    // Navigate to TargetDetails with the specified exercise ID
    this.router.navigate([exercises]);
  }
}
