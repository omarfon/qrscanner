import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmisionComponent } from './components/admision/admision.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'admision',component:AdmisionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { } */
export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });
