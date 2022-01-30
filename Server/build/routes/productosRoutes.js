"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = require("../controllers/productsController");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productsController_1.productsController.lista);
        this.router.get('/:id', productsController_1.productsController.obtenerUno);
        this.router.post('/', productsController_1.productsController.crear);
        this.router.delete('/:id', productsController_1.productsController.borrar);
        this.router.put('/:id', productsController_1.productsController.actualizar);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
