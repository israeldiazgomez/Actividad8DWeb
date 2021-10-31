import { Request, Response } from "express";
import { Compra } from '../models/Compra';
import { CompraI} from '../models/Compra'

export class CompraController {
    
    public async getCompras(req: Request, res: Response){

        try {
            const compras = await Compra.findAll()
            if(!compras){
                res.status(400).json({ msg: 'no conexion'})
            }
            return res.status(200).json({compras})
        } catch (error) {
            res.status(500).json({ msg: 'Error interno'})
        }
    }

    public async createCompra(req:Request, res: Response){
        const body: CompraI = req.body
        try {
            if((!body.fecha )) return res.status(400).json({msg:'Se requieren datos'});
            
            const fech: Compra | null = await Compra.findOne(   {where: {fecha: body.fecha},
            }
           );

         const compra = await Compra.create(body);
         res.status(200).json({compra});

          } catch (error) {
            
        }

  }
}