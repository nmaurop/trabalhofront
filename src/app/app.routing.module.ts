 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

import { ContatoComponent } from './pages/contato/contato.component';

import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';

import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';

const appRoutes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },

{ path: 'contato', component: ContatoComponent },

{ path: 'login', component: LoginComponent },

{ path: 'sobrenos', component: SobrenosComponent },


];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {
}