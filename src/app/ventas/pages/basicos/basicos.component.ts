import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  nombreLower: string="ana";
  nombreUpper: string="ANA";
  nombreComplete: string="AnA DuRaN";

  fecha: Date = new Date(); //el dia de hoy

  ngOnInit(): void {
  }

}
