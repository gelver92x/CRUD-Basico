import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto';
import { ProductosService} from '../../services/productos.service'


@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  productos: any = [];

  constructor(private productosservice: ProductosService) { }


  
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productosservice.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    )
  }
  
  borrarProducto(id: string){
    this.productosservice.eliminar(id).subscribe(
      res => {
        //console.log(res);
        this.getProductos();
      },
      err => console.error(err)
    )
  }

}
