import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutMainComponent } from './shared/layout/layout-main/layout-main.component';

import { SlideBasicComponent } from './shared/content/slide-basic/slide-basic.component';
import { TodoAppComponent } from './shared/content/todo-app/todo-app.component';


import { HomeComponent } from './components/home/home.component';
import { ExercisesComponent } from './components/exercises/exercises.component';


const routes: Routes = [
  

  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'exercises', component: ExercisesComponent },
      
      { path: 'SlideBasic', component: SlideBasicComponent },
      { path: 'TodoApp', component: TodoAppComponent },
      
      // { path: 'healthCard', component: HealthCardComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
