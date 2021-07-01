import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  //i18nSelect
  nombre: string ="Gabriel"
  genero: string = "masculino"

  invitacionMapa = {
    'masculino': "invitarlo",
    "femenino": "invitarla"
  }

  //i18nPlral
  clientes: string[]=['Maria', 'Pedro', 'Juan','Fernando','Ana']

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
   /* 'other': `${this.clientes.length} clientes esperando`*/
    'other': `# clientes esperando`
  }

  //keyValue Pipe
  persona = {
    nombre: "Daniela",
    edad: 35,
    direccion: "Chacao, Caracas"
  }

  //Json Pipe

  heroes = [
    {
      nombre: 'Supernam',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(1000);

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }


  cambiarCliente() {
    this.nombre = "Melissa";
    this.genero = "femenino"

  }

  borrarCliente(){

    this.clientes.pop()

  }

}
