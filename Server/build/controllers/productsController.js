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
exports.productsController = void 0;
const database_1 = __importDefault(require("../database"));
class ProductsController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield database_1.default.query('SELECT * FROM productos');
            res.json(productos);
        });
    }
    obtenerUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const producto = yield database_1.default.query('SELECT * FROM productos WHERE id = ?', [id]);
            //console.log(producto);
            if (producto.length > 0) {
                return res.json(producto[0]);
            }
            res.status(404).json({ text: "Producto no existe" });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); se pueden ver los datos que se envian desde Angular
            yield database_1.default.query('INSERT INTO productos set ?', [req.body]);
            res.json({
                mensaje: 'Producto guardado correctamente'
            });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM productos WHERE id = ?', [id]);
            res.json({ message: "El producto fue borrado" });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //const oldProduct = req.body;
            yield database_1.default.query('UPDATE productos set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "El producto fue actualizado" });
        });
    }
}
exports.productsController = new ProductsController();
