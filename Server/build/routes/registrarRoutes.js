"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registrarController_1 = require("../controllers/registrarController");
class registrarRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', registrarController_1.registrarcontroller.registrar);
    }
}
const registrarroutes = new registrarRoutes();
exports.default = registrarroutes.router;
