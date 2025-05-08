import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // <-- IMPORT THIS

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // <-- your component
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
      AppComponent,
      LoginComponent // now valid
    ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }