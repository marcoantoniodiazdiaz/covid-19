import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { InfoComponent } from './pages/info/info.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'home', component: AppComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]
  },
  { path: 'map', component: MapComponent },
  { path: 'info', component: InfoComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'technologies', component: TechnologiesComponent, children: [
  //     { path: '', redirectTo: 'lenguajes', pathMatch: 'full' },
  //     { path: 'lenguajes', component: LenguagesComponent },
  //     { path: 'databases', component: DatabasesComponent },
  //     { path: 'frameworks', component: FrameworksComponent },
  //     { path: 'design', component: DesignComponent },
  //   ]
  // },
  { path: '*', redirectTo: 'map', pathMatch: 'full' },
  { path: '', redirectTo: 'map', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: []
})
export class AppRoutingModule { }
