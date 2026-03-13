import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter, Route } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/pages/home/home';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),   // Enables HttpClient
    provideRouter(routes)  // Registers Angular Router + routes
  ]
}).catch(err => console.error(err));
