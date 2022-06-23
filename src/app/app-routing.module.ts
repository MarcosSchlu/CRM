import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmleadosComponent } from './components/list-emleados/list-emleados.component';

const routes: Routes = [
  { path: '', component: ListEmleadosComponent },
  { path: 'add', component: AddEditEmpleadoComponent },
  { path: 'edit/:id', component: AddEditEmpleadoComponent },
  { path: '**', component: ListEmleadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
