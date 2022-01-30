"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarcontroller = void 0;
const database_1 = __importDefault(require("../database"));
class registrarController {
    registrar(req, res) {
        const { username, password } = req.body;
        database_1.default.query('SELECT username, password FROM usuarios WHERE username=? and password=?', [username, password]);
    }
}
exports.registrarcontroller = new registrarController();
