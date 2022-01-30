"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logincontroller = void 0;
const database_1 = __importDefault(require("../database"));
class loginController {
    registro(req, res) {
        const { username, password } = req.body;
        database_1.default.query('select username,password from user where username=? and pass=?', [username, password]);
    }
    login(req, res) {
        const { username, password } = req.body;
        database_1.default.query('select username,password from user where username=? and pass=?', [username, password]);
    }
}
exports.logincontroller = new loginController();
