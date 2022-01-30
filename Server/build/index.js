"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const ingresarRoutes_1 = __importDefault(require("./routes/ingresarRoutes"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/productos', productosRoutes_1.default);
        this.app.use('/api/ingresar', ingresarRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
    //funcion para verificar el token
    verifyToken(req, res, next) {
        if (!req.headers.authorization)
            return res.status(401).json('No autorizado');
        const token = req.headers.authorization.substr(7);
        if (token !== '') {
            const content = jsonwebtoken_1.default.verify(token, 'secretkey');
            req = content;
            console.log(content);
            next();
        }
        else {
            res.status(401).json('Token vacio');
        }
    }
}
const server = new Server();
server.start();
