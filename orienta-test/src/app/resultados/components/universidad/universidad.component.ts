import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrl: './universidad.component.css'
})
export class UniversidadComponent implements OnInit {
  @Input() univName: string = '';
  @Input() univDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
