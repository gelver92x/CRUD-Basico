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

  //si el edit esta en falso, guarda
  edit: boolean = false;
  
  constructor(private productosService: ProductosService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    //en activatedroute.snapshot.params estan los parametros del producto
    const params = this.activatedroute.snapshot.params;
    //Se valida que el producto exista
    if (params.id){
      this.productosService.getProducto(params.id)
      .subscribe(
        res => {
          //console.log(res);
          this.Producto = res;
          //se cambia el valor de edit a true para saber que se esta editando
          this.edit = true;
        }
      )
    }
  }

  guardarProducto() {
    delete this.Producto.id;
    //delete this.Producto.user_id;

    this.productosService.guardar(this.Producto)
      .subscribe(
        res => {
          //console.log(res);
          this.router.navigate(['/productos']);
        }
      )
  }

  actualizarProducto(){
    this.productosService.actualizar(this.Producto.id!, this.Producto)
    .subscribe(
      res => {
        //console.log(res);
        this.router.navigate(['/productos']);
      }
    )

  }

}
