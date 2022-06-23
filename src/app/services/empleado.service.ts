import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  listaEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Marcos Perez',
      telefono: 549115556677,
      email: 'mperez@gmail.com',
      fechaIngreso: new Date('2020-01-01'),
      estadoCivil: 'Soltero',
      sexo: 'Masculino',
    },
    {
      nombreCompleto: 'Marcos Perez',
      telefono: 549115556677,
      email: 'mperez@gmail.com',
      fechaIngreso: new Date('2020-01-01'),
      estadoCivil: 'Soltero',
      sexo: 'Masculino',
    },
  ];
  constructor() {}

  getEmpleados() {
    return this.listaEmpleado.slice();
  }

  eliminarEmpleado(index: number) {
    this.listaEmpleado.splice(index, 1);
  }
}
