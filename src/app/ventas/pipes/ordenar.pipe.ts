import { Heroe } from '../interfaces/ventas.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = 'sin valor'): Heroe[] {


    switch(orderBy){

      case 'nombre':
        return heroes =  heroes.sort((a,b)=>(a.nombre > b.nombre)? 1: -1)

      case 'vuela':
        return  heroes =  heroes.sort((a,b)=>(a.vuela > b.vuela)? 1: -1)

      case 'color':
        return  heroes =  heroes.sort((a,b)=>(a.color > b.color)? 1: -1)

      default:
        return heroes;
   

    }


  }

}