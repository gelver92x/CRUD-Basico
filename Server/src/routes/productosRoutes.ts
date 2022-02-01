import { Router } from "express";
import { productsController } from '../controllers/productsController';
import { verifyToken, verifyToken2 } from '../midlewares/authjwt'


class ProductosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', verifyToken2, productsController.lista);
        this.router.get('/:id', verifyToken2, productsController.obtenerUno);
        this.router.post('/', verifyToken2, productsController.crear);
        this.router.delete('/:id', verifyToken2, productsController.borrar)
        this.router.put('/:id', verifyToken2, productsController.actualizar)
    }

}




const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;