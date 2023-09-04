import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'searchCountry', component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
