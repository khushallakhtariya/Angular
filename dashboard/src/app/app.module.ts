import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Usually needed for AppModule
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';  // Assuming you have an app component
import { HttpClientJsonpModule } from '@angular/common/http';
import { ContectNewCarComponent } from './modules/car/cars-components/newCar-components/contect-new-car/contect-new-car.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppComponent,
    HttpClientJsonpModule
  ],
  providers: [
    {
      provide: ErrorHandler,
    },
  ],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule {}
