import { Router } from "express";
import { ingresarcontroller } from '../controllers/authController';
import { verifyToken, verifyToken2 } from '../midlewares/authjwt'



class ingresarRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.post('/signIn', ingresarcontroller.ingresar);
        this.router.post('/signUp', ingresarcontroller.registrar);
    }

}


const ingresarroutes = new ingresarRoutes();
export default ingresarroutes.router;