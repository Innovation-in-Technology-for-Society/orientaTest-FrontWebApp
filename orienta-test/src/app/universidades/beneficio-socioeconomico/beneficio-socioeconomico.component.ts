import { Component, OnInit } from '@angular/core';
import { BeneficioService } from '../services/beneficio.service';
import { UniversidadBeneficioDTO } from '../interfaces/beneficio.interface';

@Component({
  selector: 'app-beneficio-socioeconomico',
  templateUrl: './beneficio-socioeconomico.component.html',
  styleUrl: './beneficio-socioeconomico.component.css',
})
export class BeneficioSocioeconomicoComponent implements OnInit {
  beneficios: UniversidadBeneficioDTO[] = [];



  constructor(private beneficioService: BeneficioService) {}

  ngOnInit(): void {
    this.beneficioService.getBeneficios().subscribe(
      (data) => {
        this.beneficios = data;
      },
      (error) => {
        console.error('Error fetching beneficios', error);
      }
    );
  }



}
