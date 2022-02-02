import jwt from 'jsonwebtoken';
import pool from '../database';


//Funcion que verifica que exista el token y el usuario dentro de el
export const verifyToken = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers["x-access-token"];
    //se valida la existencia del token
    if (!token) return res.status(403).json({ message: "No existe token" })

    //si existe el token lo decodifica
    const decode = jwt.verify(token, 'secretkey')

    //y luego se valida que el usuario exista en la base de datos
    const usuario = await pool.query('SELECT username FROM usuarios WHERE id=?', [decode]);
    if (usuario.length < 0) return res.status(404).json({ text: "Usuario no existe" })

    next();
  } catch (error) {
    return res.status(401).json({ message: 'No autorizado' })
  }
}

//funcion para verificar el token
export const verifyToken2 = async (req: any, res: any, next: any) => {
  try {
    if (!req.headers.authorization) return res.status(401).json('No autorizado');
    const token = req.headers.authorization.substr(7);
    if (token !== '') {
      const content = jwt.verify(token, 'secretkey');
      req = content;
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: 'Token vacio'});
  }
}