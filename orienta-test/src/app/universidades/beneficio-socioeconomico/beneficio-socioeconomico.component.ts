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

  logoMap: { [key: string]: string } = {
    'Universidad Peruana de Ciencias Aplicadas':
      '../../../assets/images/universidades/logo-upc.png',
    'Universidad Tecnológica del Perú':
      '../../../assets/images/universidades/logo-utp.png',
    'Universidad Peruana Cayetano Heredia':
      '../../../assets/images/universidades/logo-CH.png'
  };

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

  getLogoUrl(nombre: string): string {
    return this.logoMap[nombre] || '../../../assets/images/universidades/default-logo.png';
  }

}
