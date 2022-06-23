import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Lucas Martinez',
      email: 'lmartinez@gmail.com',
      telefono: 3512335522,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'Rodrigo Aliaga',
      email: 'raliaga@gmail.com',
      estadoCivil: 'Soltero',
      fechaIngreso: new Date('2019-05-25'),
      sexo: 'Masculino',
      telefono: 3512334422,
    },
    {
      nombreCompleto: 'Maria Funes',
      email: 'mfunes@gmail.com',
      estadoCivil: 'Casado',
      fechaIngreso: new Date('2020-04-27'),
      sexo: 'Femenino',
      telefono: 3512553322,
    },
    {
      nombreCompleto: 'Lucrecia Juarez',
      email: 'maria@gmail.com',
      estadoCivil: 'Soltero',
      fechaIngreso: new Date('2020-07-25'),
      sexo: 'Femenino',
      telefono: 3514665533,
    },
    {
      nombreCompleto: 'Federico Gonzalez',
      email: 'fgonzalez@gmail.com',
      estadoCivil: 'Soltero',
      fechaIngreso: new Date('2020-02-31'),
      sexo: 'Femenino',
      telefono: 1156688332,
    },
    {
      nombreCompleto: 'Estefania Schutz',
      email: 'eschutz@gmail.com',
      estadoCivil: 'Soltero',
      fechaIngreso: new Date('2020-01-31'),
      sexo: 'Femenino',
      telefono: 1156678679,
    },
    {
      nombreCompleto: 'Maria Belen Arzu',
      email: 'mbarzu@gmail.com',
      estadoCivil: 'Soltero',
      fechaIngreso: new Date('2020-01-31'),
      sexo: 'Femenino',
      telefono: 3512576589,
    },
  ];

  constructor() {}

  getEmpleados() {
    return this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].email = empleado.email;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].sexo = empleado.sexo;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
  }
}
