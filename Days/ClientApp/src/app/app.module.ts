import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ComponentsModule } from './components/components.module';
import { HabitoscomComponent } from './components/habitoscom/habitoscom.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent,pathMatch:'full' },
      { path: 'habitoscom', component: HabitoscomComponent, pathMatch: 'full' },
      { path: 'perfilcom', component: PerfilComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'login', component: LoginComponent },

    ]),
    ComponentsModule,

  ],
  providers: [CookieService,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
