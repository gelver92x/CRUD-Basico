"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
class authRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', authController_1.authcontroller.ingresar);
        this.router.post('/', authController_1.authcontroller.registrar);
    }
}
const authroutes = new authRoutes();
exports.default = authroutes.router;
