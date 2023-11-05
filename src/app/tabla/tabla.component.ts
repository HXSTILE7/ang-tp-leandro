import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'] // Asegúrate de que sea un array
})

export class TablaComponent implements OnInit {
  clientes: any[] = [];
  nuevoCliente: any = {
    nombre: '',
    apellido: '',
    edad: null,
    contacto: '',
    dni: '',
    deuda: null,
    fecha: new Date()
  };
  idCliente: number;
  totalRegistros: number = 0;
  totalDeudas: number = 0;
  mostrarMensajeExito: boolean = false; // Propiedad para mostrar mensaje de éxito al agregar
  mostrarMensajeEliminacion: string = ''; // Propiedad para mostrar mensaje de éxito al eliminar


  constructor() {
    this.idCliente = 1; // Inicializa idCliente en el constructor
  }

  ngOnInit() {
    // Cargar los datos desde localStorage al inicio
    const storedClientes = localStorage.getItem('clientes');
    if (storedClientes) {
      this.clientes = JSON.parse(storedClientes);
    }

    // Calcular el siguiente ID en función de los clientes existentes
    this.idCliente = this.obtenerSiguienteID();

    // Calcular los totales
    this.calcularTotales();
  }

  agregarCliente() {
    const clienteConID = {
      id: this.idCliente,
      nombre: this.nuevoCliente.nombre,
      apellido: this.nuevoCliente.apellido,
      edad: this.nuevoCliente.edad,
      contacto: this.nuevoCliente.contacto,
      dni: this.nuevoCliente.dni,
      deuda: this.nuevoCliente.deuda,
      fecha: formatDate(this.nuevoCliente.fecha, 'dd/MM/yyyy - HH:mm a', 'en-US')
    };

    this.clientes.push(clienteConID);

    // Guardar los datos en localStorage después de agregar un cliente
    localStorage.setItem('clientes', JSON.stringify(this.clientes));

    // Incrementar el ID para el próximo cliente
    this.idCliente = this.obtenerSiguienteID();

    this.nuevoCliente = {
      nombre: '',
      apellido: '',
      edad: null,
      contacto: '',
      dni: '',
      deuda: null,
      fecha: new Date()
    };

    // Calcular los totales después de agregar un cliente
    this.calcularTotales();

    // Mostrar mensaje de éxito durante 5 segundos
    this.mostrarMensajeExito = true;
    setTimeout(() => {
      this.mostrarMensajeExito = false;
    }, 5000);
  }

  eliminarCliente(index: number) {
    const clienteEliminado = this.clientes.splice(index, 1)[0];

    // Actualizar los datos en localStorage después de eliminar un cliente
    localStorage.setItem('clientes', JSON.stringify(this.clientes));

    // Calcular los totales después de eliminar un cliente
    this.calcularTotales();

    // Agregar el registro eliminado al historial
    this.agregarRegistroEliminado(clienteEliminado);

    // Mostrar mensaje de éxito al eliminar el cliente
    this.mostrarMensajeEliminacion = `Cliente ${clienteEliminado.nombre} ${clienteEliminado.apellido} eliminado con éxito.`;
    setTimeout(() => {
      this.mostrarMensajeEliminacion = '';
    }, 5000);
  }

  calcularTotales() {
    this.totalRegistros = this.clientes.length;
    this.totalDeudas = this.clientes.reduce((total, cliente) => total + cliente.deuda, 0);
  }

  obtenerSiguienteID(): number {
    if (this.clientes.length === 0) {
      return 1; // Si no hay clientes, el primer ID es 1.
    }

    // Encuentra el ID más alto actualmente en uso.
    const ids = this.clientes.map(cliente => cliente.id);
    const maxID = Math.max(...ids);

    // El siguiente ID será el máximo encontrado más 1.
    return maxID + 1;
  }

  agregarRegistroEliminado(registro: any) {
    const registrosEliminados = localStorage.getItem('registrosEliminados');
    let registrosEliminadosArray = [];

    if (registrosEliminados) {
      registrosEliminadosArray = JSON.parse(registrosEliminados);
    }

    registrosEliminadosArray.push(registro);
    localStorage.setItem('registrosEliminados', JSON.stringify(registrosEliminadosArray));
  }
}
