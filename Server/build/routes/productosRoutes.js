"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = require("../controllers/productsController");
const authjwt_1 = require("../midlewares/authjwt");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', authjwt_1.verifyToken2, productsController_1.productsController.lista);
        this.router.get('/:id', authjwt_1.verifyToken2, productsController_1.productsController.obtenerUno);
        this.router.post('/', authjwt_1.verifyToken2, productsController_1.productsController.crear);
        this.router.delete('/:id', authjwt_1.verifyToken2, productsController_1.productsController.borrar);
        this.router.put('/:id', authjwt_1.verifyToken2, productsController_1.productsController.actualizar);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
