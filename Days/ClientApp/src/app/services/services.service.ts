
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  private apiURL = "https://localhost:44341/"

  constructor() { }

}


interface IUsuario {
  id: number;
  email: string;
  password: string;
  UsuarioID: number;
  Usuario: any;
}
