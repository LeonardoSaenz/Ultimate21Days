import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitoscomComponent } from './habitoscom/habitoscom.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HabitoscomComponent, NavbarComponent, PerfilComponent, InicioComponent, LoginComponent],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  exports: [
    HabitoscomComponent,NavbarComponent,PerfilComponent,RouterModule,LoginComponent
  ]
})
export class ComponentsModule { }
