import { Component, OnInit } from '@angular/core';
import { Resultado, ResultadosService } from './services/resultados.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent implements OnInit {
  carreraName: string = '';
  carreraDescription: string = '';
  univName: string = '';
  univDescription: string = '';

  constructor(private resultadosService: ResultadosService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentTestId.subscribe(test_id => {
      if (test_id !== null) {
        this.resultadosService.getResultadoByTestId(test_id).subscribe((resultado: Resultado) => {
          this.carreraName = resultado.carreraUniversidad.carrera.nombre;
          this.carreraDescription = resultado.carreraUniversidad.carrera.descripcion;
          this.univName = resultado.carreraUniversidad.universidad.nombre;
          this.univDescription = resultado.carreraUniversidad.universidad.correoElectronico;
        });
      }
    });
  }
}
