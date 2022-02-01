"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken2 = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../database"));
//Funcion que verifica que exista el token y el usuario dentro de el
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers["x-access-token"];
        //se valida la existencia del token
        if (!token)
            return res.status(403).json({ message: "No existe token" });
        //si existe el token lo decodifica
        const decode = jsonwebtoken_1.default.verify(token, 'secretkey');
        //y luego se valida que el usuario exista en la base de datos
        const usuario = yield database_1.default.query('SELECT username FROM usuarios WHERE id=?', [decode]);
        if (usuario.length < 0)
            return res.status(404).json({ text: "Usuario no existe" });
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'No autorizado' });
    }
});
exports.verifyToken = verifyToken;
//funcion para verificar el token
const verifyToken2 = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.headers.authorization)
        return res.status(401).json('No autorizado');
    const token = req.headers.authorization.substr(7);
    if (token !== '') {
        const content = jsonwebtoken_1.default.verify(token, 'secretkey');
        req = content;
        next();
    }
    else {
        res.status(401).json('Token vacio');
    }
});
exports.verifyToken2 = verifyToken2;
