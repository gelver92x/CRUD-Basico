import { Component, OnInit } from '@angular/core';
import { producto } from '../../models/producto'
import { ActivatedRoute, Router } from '@angular/router';

import { ProductosService } from '../../services/productos.service'

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {


  Producto: producto = {
    id: 0,
    nombre: "",
    descripcion: "",
    referencia: "",
    ubicacion: "",
    sede_bodega: "",
    user_id: 1,
    imagen: ""
  };

  edit: boolean = false;
  
  constructor(private productosService: ProductosService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedroute.snapshot.params;
    if (params.id){
      this.productosService.getProducto(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.Producto = res;
          this.edit = true;
        }
      )
    }
  }

  guardarNuevoProducto() {
    delete this.Producto.id;
    //delete this.Producto.user_id;

    this.productosService.guardar(this.Producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/productos']);
        },
        err => console.error(err)
      )
  }

  actualizarProducto(){
    this.productosService.actualizar(this.Producto.id!, this.Producto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err => console.log(err)
    )

  }

}
