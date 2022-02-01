"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingresarController_1 = require("../controllers/ingresarController");
class ingresarRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', ingresarController_1.ingresarcontroller.ingresar);
    }
}
const ingresarroutes = new ingresarRoutes();
exports.default = ingresarroutes.router;
