import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes = [
    { id: '1', nombre: 'Juan', apellido: 'Pérez', edad: '20', contacto: 'juanperez22@gmail.com', dni: '44123456', debe: '$500', fecha: '30/10/2023' },
    { id: '2', nombre: 'Luana', apellido: 'Vera', edad: '31', contacto: 'luvera95@gmail.com', dni: '36123456', debe: '$750', fecha: '31/10/2023' },
    { id: '3', nombre: 'Sebastian', apellido: 'Rodriguez', edad: '27', contacto: 'sebita776@gmail.com', dni: '30123456', debe: '$320', fecha: '1/11/2023' },
    { id: '4', nombre: 'Pedro', apellido: 'Suarez', edad: '43', contacto: 'suarezpedro31@gmail.com', dni: '28123456', debe: '$880', fecha: '1/11/2023' }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
}
