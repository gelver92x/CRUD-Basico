import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { } from '@angular/router';

import { ProductosListaComponent } from './components/productos-lista/productos-lista.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard'


const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "productos",
    component: ProductosListaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productos/add',
    component: ProductoFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productos/edit/:id',
    component: ProductoFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
