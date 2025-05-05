import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HelpMeComponent } from "./help-me/help-me.component";
import { FooterComponent } from "./footer/footer.component";
import { NoPageComponent } from "./no-page/no-page.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent, 
    HelpMeComponent,
    FooterComponent,
    NoPageComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "practice-app";
}
