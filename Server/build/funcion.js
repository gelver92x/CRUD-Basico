"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyToken(req, res, next) {
    if (!req.headers.authorization)
        return res.status(401).json('No autorizado');
    const token = req.headers.authorization.substr(7);
    if (token !== '') {
        const content = jsonwebtoken_1.default.verify(token, 'secretkey');
        req.data = content;
        console.log(content);
        next();
    }
    else {
        res.status(401).json('Token vacio');
    }
}
exports.default = verifyToken;
