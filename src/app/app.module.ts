import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { HeaderComponent } from './shared/main/header/header.component';
import { FooterComponent } from './shared/main/footer/footer.component';
import { LayoutMainComponent } from './shared/layout/layout-main/layout-main.component';
import { SlideBasicComponent } from './shared/content/slide-basic/slide-basic.component';
import { TodoAppComponent } from './shared/content/todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExercisesComponent,
    HeaderComponent,
    FooterComponent,
    LayoutMainComponent,
    SlideBasicComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
