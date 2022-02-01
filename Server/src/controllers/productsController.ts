import {Request, Response} from 'express';
import pool from '../database';


class ProductsController {

    public async lista(req: Request, res: Response) {
        const productos = await pool.query('SELECT * FROM productos');
        res.json(productos)
    }

    public async obtenerUno(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const producto = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
        //console.log(producto);
        if (producto.length > 0) {
            return res.json(producto[0]);
        }
        res.status(404).json({text: "Producto no existe"})
    }

    public async crear(req: Request, res: Response): Promise<void>{
        //console.log(req.body); se pueden ver los datos que se envian desde Angular
        await pool.query('INSERT INTO productos set ?', [req.body]);
        res.json({
            mensaje: 'Producto guardado correctamente'
        })
    }

    public async borrar(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM productos WHERE id = ?', [id]);
        res.json({ message: "El producto fue borrado" });
    }

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        //const oldProduct = req.body;
        await pool.query('UPDATE productos set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El producto fue actualizado" });
    }
}

export const productsController = new ProductsController();