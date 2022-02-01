import { Request, Response } from 'express';
import pool from '../database';
import jwt from 'jsonwebtoken'



class ingresarController {

    public async ingresar(req: Request, res: Response): Promise<any> {
        //se obtienen los valores desde el body
        const { username, password } = req.body;
        
        //se valida que el usuario exista en la base de datos
        const usuario = await pool.query('SELECT id, username, password FROM usuarios WHERE username=? and password=?', [username, password]);

        //si existe se guarda como token
        if (usuario.length > 0) {
            let data = JSON.stringify(usuario[0].id);
            const token = jwt.sign(data, 'secretkey');
            res.json({token});
            console.log(token);
        } else{
            res.status(404).json({text: "Usuario o clave incorrecta"})
        }
    }

    public async registrar(req: Request, res: Response): Promise<any> {

        const{username, password, fullname} = req.body;
        const usuario = await pool.query('INSERT INTO usuarios (username, password, fullname) VALUES (?, ?, ?)', 
        [username, password, fullname]);

        jwt.sign({}, "", {})



        res.json('SignUp')
    }
}


export const ingresarcontroller = new ingresarController();