import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario', 'tempoIntegral'];

  clientes = [
    {
      nome: 'Arthur',
      sexo: 'm',
      idade: 16,
      salario: 3568,
      tempoIntegral: false
    },
    {
      nome: 'Karol',
      sexo: 'f',
      idade: 23,
      salario: 13568,
      tempoIntegral: true
    },
    {
      nome: 'Keidson',
      sexo: 'm',
      idade: 30,
      salario: 32568,
      tempoIntegral: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  funcao() {
    console.log();
  }
}
