import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})



export class PerfilComponent implements OnInit {

  constructor(private http:HttpClient,public cookie:CookieService,public login:LoginComponent) {

  }

  searchData() {
    return this.http.get<any>("https://localhost:44341/perfil?x=" + this.x).subscribe(result => {
      this.miperfil = result;
      this.birthday = this.miperfil[0].cumpleaños
    }, error => console.log(error));
  }
  x = this.cookie.get("UserID");



  miperfil = [
    {
      "usuarioId": 0,
      "nombre": "",
      "descripcion": "",
      "cumpleaños": "",
      "consejos": [],
      "habitosPerfils": [],
      "mensajes": [],
      "salaUsuarios": [],
      "usuarioLogins": []
    }
  ]

  nombre: string = "Jose Pancho"
  description: string = "Lo que más me gusta hacer en la vida es pasar el tiempo mejorando para ser mejor."
  birthday: string 

  ngOnInit() {
    this.searchData();
  }

}


