import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent implements OnInit {

  carreraName: string = 'Ingeniería de Software';
  carreraDescription: string = 'Descripción de la carrera de Ingeniería de Software.';
  univName: string = 'UPC';
  univDescription: string = 'Descripción de la UPC';

  constructor() { }

  ngOnInit(): void {
  }
}
