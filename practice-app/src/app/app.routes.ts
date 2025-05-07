import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
// import { ViewCarDetailsComponent } from "./view-car-details/view-car-details.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "car/:code/details",
    loadComponent: () =>
      import("./view-car-details/view-car-details.component").then(
        (m) => m.ViewCarDetailsComponent,
      ),
  },

  {
    path: "home/about",
    loadComponent: () =>
      import("./about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "home/contact",
    loadComponent: () =>
      import("./contact/contact.component").then((m) => m.ContactComponent),
  },

  {
    path: "home/help-me",
    loadComponent: () =>
      import("./help-me/help-me.component").then((m) => m.HelpMeComponent),
  },
  {
    path: "get-info/:carName",
    loadComponent: () =>
      import("./get-info/get-info.component").then((m) => m.InfoComponent),
  },
  {
    path: "view-car-details/:code/:section",
    loadComponent: () =>
      import("./view-car-details/view-car-details.component").then(
        (m) => m.ViewCarDetailsComponent,
      ),
  },

  {
    path: "**",
    loadComponent: () =>
      import("./no-page/no-page.component").then((m) => m.NoPageComponent),
  },
];
