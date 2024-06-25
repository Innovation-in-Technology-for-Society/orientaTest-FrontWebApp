import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css'
})
export class CarreraComponent implements OnInit{
  @Input() carreraName: string = '';
  @Input() carreraDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
