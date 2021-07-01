import { Color, Heroe } from '../../interfaces/ventas.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  ordernarPor: string = ""
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },

    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },

    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },

    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    },

  ]


  cambiarOrden(valor: string){
    this.ordernarPor = valor;
    
  }
}
