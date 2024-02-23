import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { BtnComponent } from './components/common/btn/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizzComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
