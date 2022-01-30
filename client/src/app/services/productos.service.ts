import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { producto } from '../models/producto'


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.API_URI}/productos`)
  }

  getProducto(id: string) {
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }


  eliminar(id: string) {
    return this.http.delete(`${this.API_URI}/productos/${id}`)
  }

  guardar(Producto: producto){
    return this.http.post(`${this.API_URI}/productos`, Producto)
  }

  actualizar(id: string|number, productoAct: producto){
    return this.http.put(`${this.API_URI}/productos/${id}`, productoAct)
  }

}
