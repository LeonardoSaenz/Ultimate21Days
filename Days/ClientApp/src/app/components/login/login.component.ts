import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  isProcessing: boolean;

  constructor(private http: HttpClient, public cookie: CookieService) { }

  user: IUsuario;
  val: any;
  logueado: boolean = false;
  valsize: number;

  validateUser() {
    return this.http.get<any>("https://localhost:44341/unlogin?x=" + this.user.email +"&y="+this.user.password).subscribe(result => {
      this.val = result;
      this.valsize = this.val.length;
      console.log(this.valsize);
      if (this.valsize == 1) {
        this.logueado = true;
        this.conector();
      }

    }, error => console.log(error));
  }

  
  conector() {
    this.cookie.set("UserID", this.val[0].loginId);
  }


  ngOnInit() {
    this.user = <IUsuario>{};
  }



}


interface IUsuario {
  id: number;
  email: string;
  password: string;
  UsuarioID: number;
  Usuario: any;
}
