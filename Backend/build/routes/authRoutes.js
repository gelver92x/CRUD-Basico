"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
class ingresarRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/signIn', authController_1.ingresarcontroller.ingresar);
        this.router.post('/signUp', authController_1.ingresarcontroller.registrar);
    }
}
const ingresarroutes = new ingresarRoutes();
exports.default = ingresarroutes.router;
