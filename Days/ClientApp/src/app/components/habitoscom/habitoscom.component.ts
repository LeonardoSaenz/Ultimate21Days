import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitoscom',
  templateUrl: './habitoscom.component.html',
  styleUrls: ['./habitoscom.component.css']
})
export class HabitoscomComponent implements OnInit {

  
  
  public lsthabitos: any
  public lstconsejos:any


  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    http.get<habito>(baseUrl + "habito").subscribe(result => {
      this.lsthabitos = result;
    }, error => console.log(error));
    http.get<consejos>(baseUrl + "consejos").subscribe(result2 => {
      this.lstconsejos = result2;
    }, error => console.log(error));

  }
  a: number=0;
  longitud;
  arr1: boolean[] = [];
  habitoB: number
  consejoB: number

  counter(x:number) {
    this.a = this.a + 1
    this.longitud = this.lsthabitos.length
    this.habitoB = x
    this.consejoB = x

  }


  c = 0;
  
  ngOnInit() {

  }

}

interface habito {
  habitoId: number,
  nombre: string,
  fechaEntrada: string,
  descripcion: string,
  consejosHabitos: any,
  habitosPerfils: any,
}

interface consejos {
  consejoId: number,
  fecha: string,
  descripcion: string,
  usuarioId: number,
  usuario: any,
  consejosHabitos:any,
}
