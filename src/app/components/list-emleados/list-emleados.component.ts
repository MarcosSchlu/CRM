import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from 'src/app/models/empleado';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { EmpleadoService } from './../../services/empleado.service';

@Component({
  selector: 'app-list-emleados',
  templateUrl: './list-emleados.component.html',
  styleUrls: ['./list-emleados.component.css'],
})
export class ListEmleadosComponent implements OnInit {
  displayedColumns: string[] = [
    'nombreCompleto',
    'telefono',
    'email',
    'fechaIngreso',
    'estadoCivil',
    'sexo',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Empleado>();
  listEmpleados: Empleado[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private empleadoService: EmpleadoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados() {
    this.listEmpleados = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listEmpleados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro que desea eliminar el empleado?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'aceptar') {
        this.empleadoService.eliminarEmpleado(index);
        this.cargarEmpleados();
      }
    });
  }
}
