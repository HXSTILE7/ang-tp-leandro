import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  registrosEliminados: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Cargar los registros eliminados desde localStorage
    const storedRegistrosEliminados = localStorage.getItem('registrosEliminados');
    if (storedRegistrosEliminados) {
      this.registrosEliminados = JSON.parse(storedRegistrosEliminados);
    }
  }
}
